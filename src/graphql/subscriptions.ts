/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      ownElectricVehicle
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      ownElectricVehicle
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      email
      phoneNumber
      ownElectricVehicle
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
  }
`;
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
        email
        phoneNumber
        ownElectricVehicle
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
      }
      owner
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
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
        email
        phoneNumber
        ownElectricVehicle
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
      }
      owner
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
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
        email
        phoneNumber
        ownElectricVehicle
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
      }
      owner
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
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
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
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
          answers
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
      badges {
        items {
          id
          homeID
          badgeID
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
  }
`;
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome($owner: String, $homeowners: String) {
    onUpdateHome(owner: $owner, homeowners: $homeowners) {
      id
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
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
          answers
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
      badges {
        items {
          id
          homeID
          badgeID
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
  }
`;
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome($owner: String, $homeowners: String) {
    onDeleteHome(owner: $owner, homeowners: $homeowners) {
      id
      homeType
      addressLine1
      addressLine2
      city
      addressState
      country
      zipcode
      yearBuilt
      electricProvider
      gasProvider
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
          answers
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
      badges {
        items {
          id
          homeID
          badgeID
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
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($owner: String) {
    onCreateQuestion(owner: $owner) {
      id
      text
      tags
      options
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
          answers
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
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($owner: String) {
    onUpdateQuestion(owner: $owner) {
      id
      text
      tags
      options
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
          answers
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
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($owner: String) {
    onDeleteQuestion(owner: $owner) {
      id
      text
      tags
      options
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
          answers
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
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($owner: String) {
    onCreateResponse(owner: $owner) {
      id
      homeID
      questionID
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      question {
        id
        text
        tags
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        responses {
          nextToken
          startedAt
        }
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
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      question {
        id
        text
        tags
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        responses {
          nextToken
          startedAt
        }
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
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      question {
        id
        text
        tags
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        responses {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateBadge = /* GraphQL */ `
  subscription OnCreateBadge($owner: String) {
    onCreateBadge(owner: $owner) {
      id
      name
      type
      criteria
      logoName
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
          badgeID
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
  }
`;
export const onUpdateBadge = /* GraphQL */ `
  subscription OnUpdateBadge($owner: String) {
    onUpdateBadge(owner: $owner) {
      id
      name
      type
      criteria
      logoName
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
          badgeID
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
  }
`;
export const onDeleteBadge = /* GraphQL */ `
  subscription OnDeleteBadge($owner: String) {
    onDeleteBadge(owner: $owner) {
      id
      name
      type
      criteria
      logoName
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
          badgeID
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
  }
`;
export const onCreateHomeBadge = /* GraphQL */ `
  subscription OnCreateHomeBadge($owner: String) {
    onCreateHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      badge {
        id
        name
        type
        criteria
        logoName
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
      }
      owner
    }
  }
`;
export const onUpdateHomeBadge = /* GraphQL */ `
  subscription OnUpdateHomeBadge($owner: String) {
    onUpdateHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      badge {
        id
        name
        type
        criteria
        logoName
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
      }
      owner
    }
  }
`;
export const onDeleteHomeBadge = /* GraphQL */ `
  subscription OnDeleteHomeBadge($owner: String) {
    onDeleteHomeBadge(owner: $owner) {
      id
      homeID
      badgeID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      home {
        id
        homeType
        addressLine1
        addressLine2
        city
        addressState
        country
        zipcode
        yearBuilt
        electricProvider
        gasProvider
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
        badges {
          nextToken
          startedAt
        }
      }
      badge {
        id
        name
        type
        criteria
        logoName
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
      }
      owner
    }
  }
`;
