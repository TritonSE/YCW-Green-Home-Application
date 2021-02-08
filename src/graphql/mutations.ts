/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResponse = /* GraphQL */ `
  mutation CreateResponse($input: CreateResponseInput!) {
    createResponse(input: $input) {
      response {
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
      rewards {
        points
        tag
      }
      newBadges {
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
    }
  }
`;
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse($input: UpdateResponseInput!) {
    updateResponse(input: $input) {
      response {
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
      rewards {
        points
        tag
      }
      newBadges {
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
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createHome = /* GraphQL */ `
  mutation CreateHome(
    $input: CreateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    createHome(input: $input, condition: $condition) {
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
export const updateHome = /* GraphQL */ `
  mutation UpdateHome(
    $input: UpdateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    updateHome(input: $input, condition: $condition) {
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
export const deleteHome = /* GraphQL */ `
  mutation DeleteHome(
    $input: DeleteHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    deleteHome(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createBadge = /* GraphQL */ `
  mutation CreateBadge(
    $input: CreateBadgeInput!
    $condition: ModelBadgeConditionInput
  ) {
    createBadge(input: $input, condition: $condition) {
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
export const updateBadge = /* GraphQL */ `
  mutation UpdateBadge(
    $input: UpdateBadgeInput!
    $condition: ModelBadgeConditionInput
  ) {
    updateBadge(input: $input, condition: $condition) {
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
export const deleteBadge = /* GraphQL */ `
  mutation DeleteBadge(
    $input: DeleteBadgeInput!
    $condition: ModelBadgeConditionInput
  ) {
    deleteBadge(input: $input, condition: $condition) {
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
export const createHomeBadge = /* GraphQL */ `
  mutation CreateHomeBadge(
    $input: CreateHomeBadgeInput!
    $condition: ModelHomeBadgeConditionInput
  ) {
    createHomeBadge(input: $input, condition: $condition) {
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
export const updateHomeBadge = /* GraphQL */ `
  mutation UpdateHomeBadge(
    $input: UpdateHomeBadgeInput!
    $condition: ModelHomeBadgeConditionInput
  ) {
    updateHomeBadge(input: $input, condition: $condition) {
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
export const deleteHomeBadge = /* GraphQL */ `
  mutation DeleteHomeBadge(
    $input: DeleteHomeBadgeInput!
    $condition: ModelHomeBadgeConditionInput
  ) {
    deleteHomeBadge(input: $input, condition: $condition) {
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
