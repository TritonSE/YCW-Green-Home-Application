/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHomeOwner = /* GraphQL */ `
  mutation CreateHomeOwner(
    $input: CreateHomeOwnerInput!
    $condition: ModelHomeOwnerConditionInput
  ) {
    createHomeOwner(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateHomeOwner = /* GraphQL */ `
  mutation UpdateHomeOwner(
    $input: UpdateHomeOwnerInput!
    $condition: ModelHomeOwnerConditionInput
  ) {
    updateHomeOwner(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteHomeOwner = /* GraphQL */ `
  mutation DeleteHomeOwner(
    $input: DeleteHomeOwnerInput!
    $condition: ModelHomeOwnerConditionInput
  ) {
    deleteHomeOwner(input: $input, condition: $condition) {
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
    }
  }
`;
export const createHome = /* GraphQL */ `
  mutation CreateHome(
    $input: CreateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    createHome(input: $input, condition: $condition) {
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
export const updateHome = /* GraphQL */ `
  mutation UpdateHome(
    $input: UpdateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    updateHome(input: $input, condition: $condition) {
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
export const deleteHome = /* GraphQL */ `
  mutation DeleteHome(
    $input: DeleteHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    deleteHome(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createUserResponse = /* GraphQL */ `
  mutation CreateUserResponse(
    $input: CreateUserResponseInput!
    $condition: ModelUserResponseConditionInput
  ) {
    createUserResponse(input: $input, condition: $condition) {
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
export const updateUserResponse = /* GraphQL */ `
  mutation UpdateUserResponse(
    $input: UpdateUserResponseInput!
    $condition: ModelUserResponseConditionInput
  ) {
    updateUserResponse(input: $input, condition: $condition) {
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
export const deleteUserResponse = /* GraphQL */ `
  mutation DeleteUserResponse(
    $input: DeleteUserResponseInput!
    $condition: ModelUserResponseConditionInput
  ) {
    deleteUserResponse(input: $input, condition: $condition) {
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
