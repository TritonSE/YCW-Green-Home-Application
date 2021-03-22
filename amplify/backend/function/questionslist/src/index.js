const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');
const { Difficulty, Cost, QuestionType, textToTag } = require('./enums');

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
      title: row[4], // TODO: change this once title row in measure list
      questionText: row[4],
      rewardText: row[4], // TODO: change this once reward row in measure list
      difficulty: Difficulty[row[0]],
      cost: Cost[row[1]],
      type: QuestionType[row[2]],
      tags: textToTag(row[3]),
      answer: 'Answer1, Answer2, Answer3, Answer4', // TODO: change this once answers in measure list
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
  const payload = questions.map((question) => ({
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
      'Question-esd3vkp2bbfdpiczmujceuqmke-dev': payload,
    }
  }

  return docClient.batchWrite(params).promise();
}

exports.handler = async (event) => {
  const questions = await parseQuestions();
  for (let i = 0; i < questions.length / MAX_ITEMS_PER_BATCH_TRANSACTION; i += 1) {
    const from = MAX_ITEMS_PER_BATCH_TRANSACTION * i
    const to =  MAX_ITEMS_PER_BATCH_TRANSACTION * (i + 1);
    await batchWriteQuestions(questions, from, to);
  }

  return { error: null };
};
