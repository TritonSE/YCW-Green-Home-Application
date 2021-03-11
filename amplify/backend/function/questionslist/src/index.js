const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');

AWS.config.update({ region: 'us-west-2' });

const questionsCSV = '../data/questions.csv'

const parseQuestions = async () => {
  const questions = [];
  const parser = fs
    .createReadStream(questionsCSV)
    .pipe(
      parse({ delimiter: ',' })
    );
  for await (const row of parser) {
    const question = {
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

exports.handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const questions = await parseQuestions();
  const params = {
    RequestItems: {
      'Question-esd3vkp2bbfdpiczmujceuqmke-dev': questions.map((question) => ({
        PutRequest: {
          Item: {
            id: uuid.v4(),
            __typename: 'Question',
            __lastChangedAt: Date.now(),
            version: 1,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            ...question,
          }
        }
      })),
    }
  }

  const data = await docClient.batchWrite(params).promise();

  const response = {
    statusCode: 200,
    data,
  };
  return response;
};
