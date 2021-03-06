const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');

AWS.config.update({ region: 'us-west-2' });

const questionsCSV = '../data/questions.csv'

const parseQuestions = async () => {
  const questions = [];
  const parser = fs.createReadStream(questionsCSV)
    .pipe(parse({ delimiter: ',' }));
  for await (const row of parser) {
    const question = {
      difficulty: row[0],
      cost: row[1],
      type: row[2],
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
  // const docClient = new AWS.DynamoDB.DocumentClient();
  // const params = {
  //   TableName: 'User-esd3vkp2bbfdpiczmujceuqmke-dev',
  //   Item: {
  //     id: uuid.v4(),
  //     email: 'shravanhariharan2@gmail.com',
  //     ownElectricVehicle: false,
  //   }
  // }

  // const data = await docClient.put(params).promise();

  // const response = {
  //   statusCode: 200,
  //   data,
  // };
  // return response;
  const questions = await parseQuestions();
  return questions;
};
