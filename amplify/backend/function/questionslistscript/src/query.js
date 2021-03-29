const uuid = require('uuid');

const getMutation = (questions) => {
  let mutation = getMutationName();
  questions.forEach((question) => {
    mutation += getMutationCall(question);
  });
  mutation += getMutationFooter();
  return mutation;
}

const getMutationName = () => {
  return 'mutation createQuestion { ';
}

const getMutationCall = (question) => {
  return `
    ${getRandomAlias()}: createQuestion(${getMutationParams(question)}) {
      id
      title
      questionText
      rewardText
      difficulty
      cost
      type
      tags
      answer
      metadata
    }
  `
}

const getRandomAlias = () => {
  return 'a' + uuid.v4().split('-').join('');
}

const getMutationParams = (question) => {
  return `
      input: {
        title: "${question.title}",
        questionText: "${question.questionText}",
        rewardText: "${question.rewardText}",
        difficulty: ${question.difficulty},
        cost: ${question.cost},
        type: ${question.type},
        tags: ${question.tags},
        answer: "${question.answer}",
        metadata: ${question.metadata || null}  
      }
  `
}

const getMutationFooter = () => {
  return '}';
}

module.exports = { getMutation };
