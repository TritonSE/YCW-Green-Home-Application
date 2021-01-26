/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        email
        phoneNumber
        homes {
          nextToken
          startedAt
        }
        ownElectricVehicle
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phoneNumber
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
      ownElectricVehicle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        email
        phoneNumber
        homes {
          nextToken
          startedAt
        }
        ownElectricVehicle
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
          owner
          homeowners
        }
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
        }
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
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
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
        owner
        homeowners
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
      owner
      homeowners
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
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
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
        owner
        homeowners
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
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
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
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      tags
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
      options
      metadata
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
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
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
          owner
          homeowners
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
        }
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
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      homeID
      questionID
      home {
        id
        homeOwners {
          nextToken
          startedAt
        }
        responses {
          nextToken
          startedAt
        }
        badges {
          nextToken
          startedAt
        }
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
        owner
        homeowners
      }
      question {
        id
        text
        tags
        responses {
          nextToken
          startedAt
        }
        options
        metadata
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      answers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
          owner
          homeowners
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
        }
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
`;
export const syncBadges = /* GraphQL */ `
  query SyncBadges(
    $filter: ModelBadgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBadges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        criteria
        logoName
        homes {
          nextToken
          startedAt
        }
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
export const getBadge = /* GraphQL */ `
  query GetBadge($id: ID!) {
    getBadge(id: $id) {
      id
      name
      type
      criteria
      logoName
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBadges = /* GraphQL */ `
  query ListBadges(
    $filter: ModelBadgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        criteria
        logoName
        homes {
          nextToken
          startedAt
        }
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
export const syncHomeBadges = /* GraphQL */ `
  query SyncHomeBadges(
    $filter: ModelHomeBadgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHomeBadges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        homeID
        badgeID
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
          owner
          homeowners
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
        }
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
