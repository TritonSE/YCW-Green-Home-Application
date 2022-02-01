/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      displayName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      homes {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwner {
            id
            username
            displayName
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
            homeowners
          }
        }
        nextToken
        startedAt
      }
      responses {
        items {
          id
          userID
          questionID
          answer
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          user {
            id
            username
            displayName
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          question {
            id
            title
            questionText
            rewardText
            level
            cost
            categories
            type
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        displayName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homes {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        responses {
          items {
            id
            userID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        displayName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homes {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        responses {
          items {
            id
            userID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomeOwners = /* GraphQL */ `
  query SyncHomeOwners(
    $filter: ModelHomeOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomeOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        homeID
        homeOwnerID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        homeOwner {
          id
          username
          displayName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          homes {
            nextToken
            startedAt
          }
          responses {
            nextToken
            startedAt
          }
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwners {
            nextToken
            startedAt
          }
          owner
          homeowners
          responses {
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      homeOwners {
        items {
          id
          homeID
          homeOwnerID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwner {
            id
            username
            displayName
            _version
            _deleted
            _lastChangedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
            homeowners
          }
        }
        nextToken
        startedAt
      }
      owner
      homeowners
      responses {
        items {
          id
          homeID
          questionID
          answer
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
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
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
            homeowners
          }
          question {
            id
            title
            questionText
            rewardText
            level
            cost
            categories
            type
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        homeOwners {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        owner
        homeowners
        responses {
          items {
            id
            homeID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncHomes = /* GraphQL */ `
  query SyncHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        homeOwners {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        owner
        homeowners
        responses {
          items {
            id
            homeID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      title
      questionText
      rewardText
      level
      cost
      categories
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        questionText
        rewardText
        level
        cost
        categories
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        questionText
        rewardText
        level
        cost
        categories
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      homeID
      questionID
      answer
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        homeOwners {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        owner
        homeowners
        responses {
          items {
            id
            homeID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      question {
        id
        title
        questionText
        rewardText
        level
        cost
        categories
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        homeID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwners {
            nextToken
            startedAt
          }
          owner
          homeowners
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getResponsesByCreatedAt = /* GraphQL */ `
  query GetResponsesByCreatedAt(
    $homeID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getResponsesByCreatedAt(
      homeID: $homeID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        homeID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwners {
            nextToken
            startedAt
          }
          owner
          homeowners
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        homeID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          homeOwners {
            nextToken
            startedAt
          }
          owner
          homeowners
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserResponse = /* GraphQL */ `
  query GetUserResponse($id: ID!) {
    getUserResponse(id: $id) {
      id
      userID
      questionID
      answer
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      user {
        id
        username
        displayName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        homes {
          items {
            id
            homeID
            homeOwnerID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
        responses {
          items {
            id
            userID
            questionID
            answer
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }
      question {
        id
        title
        questionText
        rewardText
        level
        cost
        categories
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const listUserResponses = /* GraphQL */ `
  query ListUserResponses(
    $filter: ModelUserResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          username
          displayName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          homes {
            nextToken
            startedAt
          }
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserResponsesByCreatedAt = /* GraphQL */ `
  query GetUserResponsesByCreatedAt(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserResponsesByCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          username
          displayName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          homes {
            nextToken
            startedAt
          }
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserResponses = /* GraphQL */ `
  query SyncUserResponses(
    $filter: ModelUserResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        questionID
        answer
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        user {
          id
          username
          displayName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          homes {
            nextToken
            startedAt
          }
          responses {
            nextToken
            startedAt
          }
        }
        question {
          id
          title
          questionText
          rewardText
          level
          cost
          categories
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
