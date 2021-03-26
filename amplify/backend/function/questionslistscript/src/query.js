module.exports = {
  mutation: `mutation createQuestion($input: CreateQuestionInput!) {
    createQuestion(input: $input) {
      id
      tags
      type
    }
  }
  `
}