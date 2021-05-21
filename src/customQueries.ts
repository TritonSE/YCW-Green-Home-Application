/* eslint-disable import/prefer-default-export */
export const customListQuestions = /* GraphQL */ `
  query questionsQuery {
    listQuestions {
      items {
        cost
        categories
        questionText
        level
        id
        title
        rewardText
      }
    }
  }
`;

export const customResponses = /* GraphQL */ `
  query responsesQuery {
    listResponses {
      items {
        id
        homeID
        questionID
        answer
        createdAt
      }
    }
  }
`;
