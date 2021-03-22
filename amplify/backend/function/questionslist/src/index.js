const { parseQuestions, batchWriteQuestions } = require('./questions');

const MAX_ITEMS_PER_DB_WRITE = 25;

exports.handler = async (event) => {
  const questions = await parseQuestions();
  for (let i = 0; i < questions.length / MAX_ITEMS_PER_DB_WRITE; i += 1) {
    const from = MAX_ITEMS_PER_DB_WRITE * i
    const to =  MAX_ITEMS_PER_DB_WRITE * (i + 1);
    await batchWriteQuestions(questions, from, to);
  }

  return { error: null };
};
