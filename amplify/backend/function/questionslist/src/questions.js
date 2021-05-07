const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');
const { Config } = require('./config');
const { Levels, Costs, textToCategory } = require('./enums');

AWS.config.update({ region: Config.region });

const questionsCSV = './data/questions.csv'
const docClient = new AWS.DynamoDB.DocumentClient();
const DATA_COLUMNS = {
  title: 0,
  questionText: 1,
  rewardText: 2,
  level: 3,
  cost: 4,
  categories: 5,
}

const parseQuestions = async () => {
  const questions = [];
  const parser = fs
    .createReadStream(questionsCSV)
    .pipe(
      parse({ delimiter: ',' })
    );
  
  for await (const row of parser) {
    const question = {
      title: row[DATA_COLUMNS.title], 
      questionText: row[DATA_COLUMNS.questionText],
      rewardText: row[DATA_COLUMNS.rewardText], 
      level: Levels[row[DATA_COLUMNS.level]],
      cost: Costs[row[DATA_COLUMNS.cost]],
      categories: textToCategory(row[DATA_COLUMNS.categories]),
    };
    questions.push(question);
  }

  return questions;
}

const batchWriteQuestions = async (questions) => {
  const payload = questions.map((question) => ({
    PutRequest: {
      Item: {
        id: uuid.v4(),
        __typename: 'Question',
        _lastChangedAt: new Date().getTime(),
        _version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...question,
      }
    }
  }));
  const params = {
    RequestItems: {
      [Config.tableName]: payload,
    }
  }

  return docClient.batchWrite(params).promise();
}

module.exports = { parseQuestions, batchWriteQuestions };