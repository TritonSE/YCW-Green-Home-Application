const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const parse = require('csv-parse');
const { Config } = require('./config');
const { Difficulty, Cost, QuestionType, textToTag } = require('./enums');

AWS.config.update({ region: Config.region });

const questionsCSV = './data/questions.csv'
const docClient = new AWS.DynamoDB.DocumentClient();
const DATA_COLUMNS = {
  difficulty: 0,
  cost: 1,
  type: 2,
  tags: 3,
  title: 4, // TODO: change this once title row in measure list
  questionText: 4,
  rewardText: 4, // TODO: change this once reward row in measure list
  additionalQuestionInfo: 5,
  isPopup: 6,
  responseFormat: 7,
  notes: 8,
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
      difficulty: Difficulty[row[DATA_COLUMNS.difficulty]],
      cost: Cost[row[DATA_COLUMNS.cost]],
      type: QuestionType[row[DATA_COLUMNS.type]],
      tags: textToTag(row[DATA_COLUMNS.tags]),
      answer: 'Answer1, Answer2, Answer3, Answer4', // TODO: change this once answers in measure list
      metadata: {
        additionalQuestionInfo: row[DATA_COLUMNS.additionalQuestionInfo],
        isPopup: row[DATA_COLUMNS.isPopup] === 'Yes',
        responseFormat: row[DATA_COLUMNS.responseFormat],
        notes: row[DATA_COLUMNS.notes], 
      }
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
        _lastChangedAt: Date.now(),
        _version: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
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