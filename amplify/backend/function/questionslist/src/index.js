/* Amplify Params - DO NOT EDIT
	API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT
	API_YOURCLEARWAYAPI_QUESTIONTABLE_ARN
	API_YOURCLEARWAYAPI_QUESTIONTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */const { parseQuestions, batchWriteQuestions } = require('./questions');

const MAX_ITEMS_PER_DB_WRITE = 25; // Maximum number of items DynamoDB allows per batch write

exports.handler = async (event) => {
  const questions = await parseQuestions();
  // Write items to database in batches of size MAX_ITEMS_PER_DB_WRITE since DynamoDB restricts batch sizes
  for (let i = 0; i < questions.length / MAX_ITEMS_PER_DB_WRITE; i += 1) {
    const from = MAX_ITEMS_PER_DB_WRITE * i
    const to =  MAX_ITEMS_PER_DB_WRITE * (i + 1);
    const questionsBatch = questions.slice(from, to);
    await batchWriteQuestions(questionsBatch);
  }

  return { error: null };
};