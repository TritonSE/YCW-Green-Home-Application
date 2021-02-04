/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          owner
          homeowners
        }
      }
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
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
      nextToken
      startedAt
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
        owner
      }
      nextToken
      startedAt
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
        owner
      }
      nextToken
      startedAt
    }
  }
`;
