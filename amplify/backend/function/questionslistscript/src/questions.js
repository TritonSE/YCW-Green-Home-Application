const fs = require('fs');
const parse = require('csv-parse');
const { Difficulty, Cost, QuestionType, textToTag } = require('./enums');

const questionsCSV = '../data/questions.csv'
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

const loadQuestionsFromCSV = async () => {
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
      // metadata: {
      //   additionalQuestionInfo: row[DATA_COLUMNS.additionalQuestionInfo].toString(),
      //   isPopup: (row[DATA_COLUMNS.isPopup] === 'Yes').toString(),
      //   responseFormat: row[DATA_COLUMNS.responseFormat].toString(),
      //   notes: row[DATA_COLUMNS.notes].toString(), 
      // }
    };
    questions.push(question);
  }

  return questions;
}


module.exports = { loadQuestionsFromCSV };