const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');

AWS.config.update({ region: 'us-west-2' });

const questionsCSV = '../data/questions.csv'
const docClient = new AWS.DynamoDB.DocumentClient();
const MAX_ITEMS_PER_BATCH_TRANSACTION = 25;

const parseQuestions = async () => {
  const questions = [];
  const parser = fs
    .createReadStream(questionsCSV)
    .pipe(
      parse({ delimiter: ',' })
    );
  for await (const row of parser) {
    const question = {
      // FIXME: uncomment these once schema is updated
      // difficulty: row[0],
      // cost: row[1],
      // type: row[2],
      tags: row[3].split(','),
      text: row[4],
      metadata: {
        additionalQuestionInfo: row[5],
        isPopup: row[6] === 'Yes',
        responseFormat: row[7],
        notes: row[8] 
      }
    };
    questions.push(question);
  }
  return questions;
}

const batchWriteQuestions = async (questions, from, to) => {
  const q = questions.map((question) => ({
    PutRequest: {
      Item: {
        id: uuid.v4(),
        __typename: 'Question',
        _lastChangedAt: Date.now(),
        _version: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...question,
      }
    }
  })).slice(from, to);
  const params = {
    RequestItems: {
      'Question-esd3vkp2bbfdpiczmujceuqmke-dev': q
    }
  }

  return docClient.batchWrite(params).promise();
}

exports.handler = async (event) => {
  const questions = await parseQuestions();
  for (let i = 0; i < questions.length / MAX_ITEMS_PER_BATCH_TRANSACTION; i += 1) {
    const from = MAX_ITEMS_PER_BATCH_TRANSACTION * i
    const to =  MAX_ITEMS_PER_BATCH_TRANSACTION * (i + 1);
    console.log(from + ' ' + to);
    await batchWriteQuestions(questions, from, to);
  }

  return { error: null };
};
