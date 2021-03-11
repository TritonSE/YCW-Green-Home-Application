/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
    }
  }
`;
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
      difficulty
      cost
      type
      tags
      answer
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
      difficulty
      cost
      type
      tags
      answer
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
      difficulty
      cost
      type
      tags
      answer
      metadata
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
            difficulty
            cost
            type
            tags
            answer
            metadata
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
