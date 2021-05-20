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

export const customGetUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      displayName
      createdAt
      updatedAt
      owner
      homes {
        items {
          id
          homeID
          homeOwnerID
          createdAt
          updatedAt
          homeOwner {
            id
            username
            displayName
            createdAt
            updatedAt
            owner
          }
          owner
          home {
            id
            addressLine1
            addressLine2
            city
            addressState
            country
            zipcode
            yearBuilt
            outDoorArea
            livableArea
            bedroomCount
            bathroomCount
            heatingFuelType
            heaterAge
            waterHeaterFuelType
            waterHeaterAge
            hasAirConditioner
            hasPool
            hasHotTub
            annualElectricalEnergyUsage
            annualGasPropaneEnergyUsage
            annualWaterUsage
            createdAt
            updatedAt
            owner
            homeowners
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
