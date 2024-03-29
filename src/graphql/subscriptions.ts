/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHomeOwner = /* GraphQL */ `
  subscription OnCreateHomeOwner($owner: String) {
    onCreateHomeOwner(owner: $owner) {
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
export const onUpdateHomeOwner = /* GraphQL */ `
  subscription OnUpdateHomeOwner($owner: String) {
    onUpdateHomeOwner(owner: $owner) {
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
export const onDeleteHomeOwner = /* GraphQL */ `
  subscription OnDeleteHomeOwner($owner: String) {
    onDeleteHomeOwner(owner: $owner) {
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
export const onCreateHome = /* GraphQL */ `
  subscription OnCreateHome($owner: String, $homeowners: String) {
    onCreateHome(owner: $owner, homeowners: $homeowners) {
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
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome($owner: String, $homeowners: String) {
    onUpdateHome(owner: $owner, homeowners: $homeowners) {
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
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome($owner: String, $homeowners: String) {
    onDeleteHome(owner: $owner, homeowners: $homeowners) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String) {
    onCreateResponse(owner: $owner) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($owner: String) {
    onUpdateResponse(owner: $owner) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($owner: String) {
    onDeleteResponse(owner: $owner) {
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
export const onCreateUserResponse = /* GraphQL */ `
  subscription OnCreateUserResponse($owner: String) {
    onCreateUserResponse(owner: $owner) {
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
export const onUpdateUserResponse = /* GraphQL */ `
  subscription OnUpdateUserResponse($owner: String) {
    onUpdateUserResponse(owner: $owner) {
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
export const onDeleteUserResponse = /* GraphQL */ `
  subscription OnDeleteUserResponse($owner: String) {
    onDeleteUserResponse(owner: $owner) {
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
