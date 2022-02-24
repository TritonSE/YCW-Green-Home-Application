/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHomeOwnerInput = {
  id?: string | null;
  homeID: string;
  homeOwnerID: string;
  _version?: number | null;
};

export type ModelHomeOwnerConditionInput = {
  homeID?: ModelIDInput | null;
  homeOwnerID?: ModelIDInput | null;
  and?: Array<ModelHomeOwnerConditionInput | null> | null;
  or?: Array<ModelHomeOwnerConditionInput | null> | null;
  not?: ModelHomeOwnerConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type HomeOwner = {
  __typename: 'HomeOwner';
  id?: string;
  homeID?: string;
  homeOwnerID?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  homeOwner?: User;
  owner?: string | null;
  home?: Home;
};

export type User = {
  __typename: 'User';
  id?: string;
  username?: string;
  displayName?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
  homes?: ModelHomeOwnerConnection;
  responses?: ModelUserResponseConnection;
};

export type ModelHomeOwnerConnection = {
  __typename: 'ModelHomeOwnerConnection';
  items?: Array<HomeOwner | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserResponseConnection = {
  __typename: 'ModelUserResponseConnection';
  items?: Array<UserResponse | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserResponse = {
  __typename: 'UserResponse';
  id?: string;
  userID?: string;
  questionID?: string;
  answer?: string;
  createdAt?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  updatedAt?: string;
  user?: User;
  question?: Question;
  owner?: string | null;
};

export type Question = {
  __typename: 'Question';
  id?: string;
  title?: string;
  questionText?: string;
  rewardText?: string;
  level?: Level;
  cost?: Cost;
  categories?: Array<Category>;
  type?: ResponseType;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export enum Level {
  STARTER = 'STARTER',
  INTERMEDIATE = 'INTERMEDIATE',
  GURU = 'GURU',
}

export enum Cost {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

export enum Category {
  ENERGY = 'ENERGY',
  RESILIENCY = 'RESILIENCY',
  HEALTH = 'HEALTH',
  WATER = 'WATER',
}

export enum ResponseType {
  USER = 'USER',
  HOME = 'HOME',
}

export type Home = {
  __typename: 'Home';
  id?: string;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  addressState?: string | null;
  country?: string | null;
  zipcode?: string;
  yearBuilt?: number | null;
  outDoorArea?: number | null;
  livableArea?: number;
  bedroomCount?: number;
  bathroomCount?: number | null;
  heatingFuelType?: HeatingFuelType | null;
  heaterAge?: AgeType | null;
  waterHeaterFuelType?: WaterHeaterFuelType | null;
  waterHeaterAge?: AgeType | null;
  hasAirConditioner?: boolean | null;
  hasPool?: boolean | null;
  hasHotTub?: boolean | null;
  annualElectricalEnergyUsage?: number | null;
  annualGasPropaneEnergyUsage?: number | null;
  annualWaterUsage?: number | null;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  homeOwners?: ModelHomeOwnerConnection;
  owner?: string | null;
  homeowners?: string | null;
  responses?: ModelResponseConnection;
};

export enum HeatingFuelType {
  GAS = 'GAS',
  ELECTRIC = 'ELECTRIC',
  PROPANE = 'PROPANE',
  OTHER = 'OTHER',
}

export enum AgeType {
  LESS_THAN_5 = 'LESS_THAN_5',
  MORE_THAN_5 = 'MORE_THAN_5',
  MORE_THAN_10 = 'MORE_THAN_10',
  MORE_THAN_20 = 'MORE_THAN_20',
}

export enum WaterHeaterFuelType {
  GAS = 'GAS',
  ELECTRIC = 'ELECTRIC',
  OTHER = 'OTHER',
}

export type ModelResponseConnection = {
  __typename: 'ModelResponseConnection';
  items?: Array<Response | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Response = {
  __typename: 'Response';
  id?: string;
  homeID?: string;
  questionID?: string;
  answer?: string;
  createdAt?: string;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  updatedAt?: string;
  home?: Home;
  question?: Question;
  owner?: string | null;
};

export type UpdateHomeOwnerInput = {
  id: string;
  homeID?: string | null;
  homeOwnerID?: string | null;
  _version?: number | null;
};

export type DeleteHomeOwnerInput = {
  id: string;
  _version?: number | null;
};

export type CreateHomeInput = {
  id?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  addressState?: string | null;
  country?: string | null;
  zipcode: string;
  yearBuilt?: number | null;
  outDoorArea?: number | null;
  livableArea: number;
  bedroomCount: number;
  bathroomCount?: number | null;
  heatingFuelType?: HeatingFuelType | null;
  heaterAge?: AgeType | null;
  waterHeaterFuelType?: WaterHeaterFuelType | null;
  waterHeaterAge?: AgeType | null;
  hasAirConditioner?: boolean | null;
  hasPool?: boolean | null;
  hasHotTub?: boolean | null;
  annualElectricalEnergyUsage?: number | null;
  annualGasPropaneEnergyUsage?: number | null;
  annualWaterUsage?: number | null;
  _version?: number | null;
};

export type ModelHomeConditionInput = {
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  addressState?: ModelStringInput | null;
  country?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  yearBuilt?: ModelIntInput | null;
  outDoorArea?: ModelFloatInput | null;
  livableArea?: ModelFloatInput | null;
  bedroomCount?: ModelIntInput | null;
  bathroomCount?: ModelIntInput | null;
  heatingFuelType?: ModelHeatingFuelTypeInput | null;
  heaterAge?: ModelAgeTypeInput | null;
  waterHeaterFuelType?: ModelWaterHeaterFuelTypeInput | null;
  waterHeaterAge?: ModelAgeTypeInput | null;
  hasAirConditioner?: ModelBooleanInput | null;
  hasPool?: ModelBooleanInput | null;
  hasHotTub?: ModelBooleanInput | null;
  annualElectricalEnergyUsage?: ModelFloatInput | null;
  annualGasPropaneEnergyUsage?: ModelFloatInput | null;
  annualWaterUsage?: ModelFloatInput | null;
  and?: Array<ModelHomeConditionInput | null> | null;
  or?: Array<ModelHomeConditionInput | null> | null;
  not?: ModelHomeConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelHeatingFuelTypeInput = {
  eq?: HeatingFuelType | null;
  ne?: HeatingFuelType | null;
};

export type ModelAgeTypeInput = {
  eq?: AgeType | null;
  ne?: AgeType | null;
};

export type ModelWaterHeaterFuelTypeInput = {
  eq?: WaterHeaterFuelType | null;
  ne?: WaterHeaterFuelType | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateHomeInput = {
  id: string;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  addressState?: string | null;
  country?: string | null;
  zipcode?: string | null;
  yearBuilt?: number | null;
  outDoorArea?: number | null;
  livableArea?: number | null;
  bedroomCount?: number | null;
  bathroomCount?: number | null;
  heatingFuelType?: HeatingFuelType | null;
  heaterAge?: AgeType | null;
  waterHeaterFuelType?: WaterHeaterFuelType | null;
  waterHeaterAge?: AgeType | null;
  hasAirConditioner?: boolean | null;
  hasPool?: boolean | null;
  hasHotTub?: boolean | null;
  annualElectricalEnergyUsage?: number | null;
  annualGasPropaneEnergyUsage?: number | null;
  annualWaterUsage?: number | null;
  _version?: number | null;
};

export type DeleteHomeInput = {
  id: string;
  _version?: number | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  title: string;
  questionText: string;
  rewardText: string;
  level: Level;
  cost: Cost;
  categories: Array<Category>;
  type: ResponseType;
  _version?: number | null;
};

export type ModelQuestionConditionInput = {
  title?: ModelStringInput | null;
  questionText?: ModelStringInput | null;
  rewardText?: ModelStringInput | null;
  level?: ModelLevelInput | null;
  cost?: ModelCostInput | null;
  categories?: ModelCategoryListInput | null;
  type?: ModelResponseTypeInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type ModelLevelInput = {
  eq?: Level | null;
  ne?: Level | null;
};

export type ModelCostInput = {
  eq?: Cost | null;
  ne?: Cost | null;
};

export type ModelCategoryListInput = {
  eq?: Array<Category | null> | null;
  ne?: Array<Category | null> | null;
  contains?: Category | null;
  notContains?: Category | null;
};

export type ModelResponseTypeInput = {
  eq?: ResponseType | null;
  ne?: ResponseType | null;
};

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
  questionText?: string | null;
  rewardText?: string | null;
  level?: Level | null;
  cost?: Cost | null;
  categories?: Array<Category> | null;
  type?: ResponseType | null;
  _version?: number | null;
};

export type DeleteQuestionInput = {
  id: string;
  _version?: number | null;
};

export type CreateResponseInput = {
  id?: string | null;
  homeID: string;
  questionID: string;
  answer: string;
  createdAt?: string | null;
  _version?: number | null;
};

export type ModelResponseConditionInput = {
  homeID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  answer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelResponseConditionInput | null> | null;
  or?: Array<ModelResponseConditionInput | null> | null;
  not?: ModelResponseConditionInput | null;
};

export type UpdateResponseInput = {
  id: string;
  homeID?: string | null;
  questionID?: string | null;
  answer?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type DeleteResponseInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserResponseInput = {
  id?: string | null;
  userID: string;
  questionID: string;
  answer: string;
  createdAt?: string | null;
  _version?: number | null;
};

export type ModelUserResponseConditionInput = {
  userID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  answer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelUserResponseConditionInput | null> | null;
  or?: Array<ModelUserResponseConditionInput | null> | null;
  not?: ModelUserResponseConditionInput | null;
};

export type UpdateUserResponseInput = {
  id: string;
  userID?: string | null;
  questionID?: string | null;
  answer?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type DeleteUserResponseInput = {
  id: string;
  _version?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  displayName?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: 'ModelUserConnection';
  items?: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelHomeOwnerFilterInput = {
  id?: ModelIDInput | null;
  homeID?: ModelIDInput | null;
  homeOwnerID?: ModelIDInput | null;
  and?: Array<ModelHomeOwnerFilterInput | null> | null;
  or?: Array<ModelHomeOwnerFilterInput | null> | null;
  not?: ModelHomeOwnerFilterInput | null;
};

export type ModelHomeFilterInput = {
  id?: ModelIDInput | null;
  addressLine1?: ModelStringInput | null;
  addressLine2?: ModelStringInput | null;
  city?: ModelStringInput | null;
  addressState?: ModelStringInput | null;
  country?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  yearBuilt?: ModelIntInput | null;
  outDoorArea?: ModelFloatInput | null;
  livableArea?: ModelFloatInput | null;
  bedroomCount?: ModelIntInput | null;
  bathroomCount?: ModelIntInput | null;
  heatingFuelType?: ModelHeatingFuelTypeInput | null;
  heaterAge?: ModelAgeTypeInput | null;
  waterHeaterFuelType?: ModelWaterHeaterFuelTypeInput | null;
  waterHeaterAge?: ModelAgeTypeInput | null;
  hasAirConditioner?: ModelBooleanInput | null;
  hasPool?: ModelBooleanInput | null;
  hasHotTub?: ModelBooleanInput | null;
  annualElectricalEnergyUsage?: ModelFloatInput | null;
  annualGasPropaneEnergyUsage?: ModelFloatInput | null;
  annualWaterUsage?: ModelFloatInput | null;
  and?: Array<ModelHomeFilterInput | null> | null;
  or?: Array<ModelHomeFilterInput | null> | null;
  not?: ModelHomeFilterInput | null;
};

export type ModelHomeConnection = {
  __typename: 'ModelHomeConnection';
  items?: Array<Home | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  questionText?: ModelStringInput | null;
  rewardText?: ModelStringInput | null;
  level?: ModelLevelInput | null;
  cost?: ModelCostInput | null;
  categories?: ModelCategoryListInput | null;
  type?: ModelResponseTypeInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelQuestionConnection = {
  __typename: 'ModelQuestionConnection';
  items?: Array<Question | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelResponseFilterInput = {
  id?: ModelIDInput | null;
  homeID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  answer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelResponseFilterInput | null> | null;
  or?: Array<ModelResponseFilterInput | null> | null;
  not?: ModelResponseFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelUserResponseFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  questionID?: ModelIDInput | null;
  answer?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelUserResponseFilterInput | null> | null;
  or?: Array<ModelUserResponseFilterInput | null> | null;
  not?: ModelUserResponseFilterInput | null;
};

export type CreateHomeOwnerMutationVariables = {
  input?: CreateHomeOwnerInput;
  condition?: ModelHomeOwnerConditionInput | null;
};

export type CreateHomeOwnerMutation = {
  createHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type UpdateHomeOwnerMutationVariables = {
  input?: UpdateHomeOwnerInput;
  condition?: ModelHomeOwnerConditionInput | null;
};

export type UpdateHomeOwnerMutation = {
  updateHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type DeleteHomeOwnerMutationVariables = {
  input?: DeleteHomeOwnerInput;
  condition?: ModelHomeOwnerConditionInput | null;
};

export type DeleteHomeOwnerMutation = {
  deleteHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type CreateHomeMutationVariables = {
  input?: CreateHomeInput;
  condition?: ModelHomeConditionInput | null;
};

export type CreateHomeMutation = {
  createHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type UpdateHomeMutationVariables = {
  input?: UpdateHomeInput;
  condition?: ModelHomeConditionInput | null;
};

export type UpdateHomeMutation = {
  updateHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type DeleteHomeMutationVariables = {
  input?: DeleteHomeInput;
  condition?: ModelHomeConditionInput | null;
};

export type DeleteHomeMutation = {
  deleteHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type CreateQuestionMutationVariables = {
  input?: CreateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type CreateQuestionMutation = {
  createQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateQuestionMutationVariables = {
  input?: UpdateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type UpdateQuestionMutation = {
  updateQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteQuestionMutationVariables = {
  input?: DeleteQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type DeleteQuestionMutation = {
  deleteQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateResponseMutationVariables = {
  input?: CreateResponseInput;
  condition?: ModelResponseConditionInput | null;
};

export type CreateResponseMutation = {
  createResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type UpdateResponseMutationVariables = {
  input?: UpdateResponseInput;
  condition?: ModelResponseConditionInput | null;
};

export type UpdateResponseMutation = {
  updateResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type DeleteResponseMutationVariables = {
  input?: DeleteResponseInput;
  condition?: ModelResponseConditionInput | null;
};

export type DeleteResponseMutation = {
  deleteResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type CreateUserResponseMutationVariables = {
  input?: CreateUserResponseInput;
  condition?: ModelUserResponseConditionInput | null;
};

export type CreateUserResponseMutation = {
  createUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type UpdateUserResponseMutationVariables = {
  input?: UpdateUserResponseInput;
  condition?: ModelUserResponseConditionInput | null;
};

export type UpdateUserResponseMutation = {
  updateUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type DeleteUserResponseMutationVariables = {
  input?: DeleteUserResponseInput;
  condition?: ModelUserResponseConditionInput | null;
};

export type DeleteUserResponseMutation = {
  deleteUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id?: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    username: string;
    displayName: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    homes?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    responses?: {
      __typename: 'ModelUserResponseConnection';
      items: Array<{
        __typename: 'UserResponse';
        id: string;
        userID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        user?: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncHomeOwnersQueryVariables = {
  filter?: ModelHomeOwnerFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncHomeOwnersQuery = {
  syncHomeOwners?: {
    __typename: 'ModelHomeOwnerConnection';
    items: Array<{
      __typename: 'HomeOwner';
      id: string;
      homeID: string;
      homeOwnerID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwner: {
        __typename: 'User';
        id: string;
        username: string;
        displayName: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        homes?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        responses?: {
          __typename: 'ModelUserResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      };
      owner?: string | null;
      home: {
        __typename: 'Home';
        id: string;
        addressLine1?: string | null;
        addressLine2?: string | null;
        city?: string | null;
        addressState?: string | null;
        country?: string | null;
        zipcode: string;
        yearBuilt?: number | null;
        outDoorArea?: number | null;
        livableArea: number;
        bedroomCount: number;
        bathroomCount?: number | null;
        heatingFuelType?: HeatingFuelType | null;
        heaterAge?: AgeType | null;
        waterHeaterFuelType?: WaterHeaterFuelType | null;
        waterHeaterAge?: AgeType | null;
        hasAirConditioner?: boolean | null;
        hasPool?: boolean | null;
        hasHotTub?: boolean | null;
        annualElectricalEnergyUsage?: number | null;
        annualGasPropaneEnergyUsage?: number | null;
        annualWaterUsage?: number | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwners?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        owner?: string | null;
        homeowners?: string | null;
        responses?: {
          __typename: 'ModelResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      };
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetHomeQueryVariables = {
  id?: string;
};

export type GetHomeQuery = {
  getHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type ListHomesQueryVariables = {
  filter?: ModelHomeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListHomesQuery = {
  listHomes?: {
    __typename: 'ModelHomeConnection';
    items: Array<{
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncHomesQueryVariables = {
  filter?: ModelHomeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncHomesQuery = {
  syncHomes?: {
    __typename: 'ModelHomeConnection';
    items: Array<{
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetQuestionQueryVariables = {
  id?: string;
};

export type GetQuestionQuery = {
  getQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListQuestionsQuery = {
  listQuestions?: {
    __typename: 'ModelQuestionConnection';
    items: Array<{
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncQuestionsQuery = {
  syncQuestions?: {
    __typename: 'ModelQuestionConnection';
    items: Array<{
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetResponseQueryVariables = {
  id?: string;
};

export type GetResponseQuery = {
  getResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type ListResponsesQueryVariables = {
  filter?: ModelResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListResponsesQuery = {
  listResponses?: {
    __typename: 'ModelResponseConnection';
    items: Array<{
      __typename: 'Response';
      id: string;
      homeID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      home?: {
        __typename: 'Home';
        id: string;
        addressLine1?: string | null;
        addressLine2?: string | null;
        city?: string | null;
        addressState?: string | null;
        country?: string | null;
        zipcode: string;
        yearBuilt?: number | null;
        outDoorArea?: number | null;
        livableArea: number;
        bedroomCount: number;
        bathroomCount?: number | null;
        heatingFuelType?: HeatingFuelType | null;
        heaterAge?: AgeType | null;
        waterHeaterFuelType?: WaterHeaterFuelType | null;
        waterHeaterAge?: AgeType | null;
        hasAirConditioner?: boolean | null;
        hasPool?: boolean | null;
        hasHotTub?: boolean | null;
        annualElectricalEnergyUsage?: number | null;
        annualGasPropaneEnergyUsage?: number | null;
        annualWaterUsage?: number | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwners?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        owner?: string | null;
        homeowners?: string | null;
        responses?: {
          __typename: 'ModelResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetResponsesByCreatedAtQueryVariables = {
  homeID?: string | null;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetResponsesByCreatedAtQuery = {
  getResponsesByCreatedAt?: {
    __typename: 'ModelResponseConnection';
    items: Array<{
      __typename: 'Response';
      id: string;
      homeID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      home?: {
        __typename: 'Home';
        id: string;
        addressLine1?: string | null;
        addressLine2?: string | null;
        city?: string | null;
        addressState?: string | null;
        country?: string | null;
        zipcode: string;
        yearBuilt?: number | null;
        outDoorArea?: number | null;
        livableArea: number;
        bedroomCount: number;
        bathroomCount?: number | null;
        heatingFuelType?: HeatingFuelType | null;
        heaterAge?: AgeType | null;
        waterHeaterFuelType?: WaterHeaterFuelType | null;
        waterHeaterAge?: AgeType | null;
        hasAirConditioner?: boolean | null;
        hasPool?: boolean | null;
        hasHotTub?: boolean | null;
        annualElectricalEnergyUsage?: number | null;
        annualGasPropaneEnergyUsage?: number | null;
        annualWaterUsage?: number | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwners?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        owner?: string | null;
        homeowners?: string | null;
        responses?: {
          __typename: 'ModelResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncResponsesQueryVariables = {
  filter?: ModelResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncResponsesQuery = {
  syncResponses?: {
    __typename: 'ModelResponseConnection';
    items: Array<{
      __typename: 'Response';
      id: string;
      homeID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      home?: {
        __typename: 'Home';
        id: string;
        addressLine1?: string | null;
        addressLine2?: string | null;
        city?: string | null;
        addressState?: string | null;
        country?: string | null;
        zipcode: string;
        yearBuilt?: number | null;
        outDoorArea?: number | null;
        livableArea: number;
        bedroomCount: number;
        bathroomCount?: number | null;
        heatingFuelType?: HeatingFuelType | null;
        heaterAge?: AgeType | null;
        waterHeaterFuelType?: WaterHeaterFuelType | null;
        waterHeaterAge?: AgeType | null;
        hasAirConditioner?: boolean | null;
        hasPool?: boolean | null;
        hasHotTub?: boolean | null;
        annualElectricalEnergyUsage?: number | null;
        annualGasPropaneEnergyUsage?: number | null;
        annualWaterUsage?: number | null;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwners?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        owner?: string | null;
        homeowners?: string | null;
        responses?: {
          __typename: 'ModelResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserResponseQueryVariables = {
  id?: string;
};

export type GetUserResponseQuery = {
  getUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type ListUserResponsesQueryVariables = {
  filter?: ModelUserResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserResponsesQuery = {
  listUserResponses?: {
    __typename: 'ModelUserResponseConnection';
    items: Array<{
      __typename: 'UserResponse';
      id: string;
      userID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      user?: {
        __typename: 'User';
        id: string;
        username: string;
        displayName: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        homes?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        responses?: {
          __typename: 'ModelUserResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserResponsesByCreatedAtQueryVariables = {
  userID?: string | null;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetUserResponsesByCreatedAtQuery = {
  getUserResponsesByCreatedAt?: {
    __typename: 'ModelUserResponseConnection';
    items: Array<{
      __typename: 'UserResponse';
      id: string;
      userID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      user?: {
        __typename: 'User';
        id: string;
        username: string;
        displayName: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        homes?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        responses?: {
          __typename: 'ModelUserResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserResponsesQueryVariables = {
  filter?: ModelUserResponseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserResponsesQuery = {
  syncUserResponses?: {
    __typename: 'ModelUserResponseConnection';
    items: Array<{
      __typename: 'UserResponse';
      id: string;
      userID: string;
      questionID: string;
      answer: string;
      createdAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      updatedAt: string;
      user?: {
        __typename: 'User';
        id: string;
        username: string;
        displayName: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        homes?: {
          __typename: 'ModelHomeOwnerConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
        responses?: {
          __typename: 'ModelUserResponseConnection';
          nextToken?: string | null;
          startedAt?: number | null;
        } | null;
      } | null;
      question?: {
        __typename: 'Question';
        id: string;
        title: string;
        questionText: string;
        rewardText: string;
        level: Level;
        cost: Cost;
        categories: Array<Category>;
        type: ResponseType;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateHomeOwnerSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateHomeOwnerSubscription = {
  onCreateHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type OnUpdateHomeOwnerSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateHomeOwnerSubscription = {
  onUpdateHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type OnDeleteHomeOwnerSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteHomeOwnerSubscription = {
  onDeleteHomeOwner?: {
    __typename: 'HomeOwner';
    id: string;
    homeID: string;
    homeOwnerID: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwner: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
    owner?: string | null;
    home: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    };
  } | null;
};

export type OnCreateHomeSubscriptionVariables = {
  owner?: string | null;
  homeowners?: string | null;
};

export type OnCreateHomeSubscription = {
  onCreateHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnUpdateHomeSubscriptionVariables = {
  owner?: string | null;
  homeowners?: string | null;
};

export type OnUpdateHomeSubscription = {
  onUpdateHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnDeleteHomeSubscriptionVariables = {
  owner?: string | null;
  homeowners?: string | null;
};

export type OnDeleteHomeSubscription = {
  onDeleteHome?: {
    __typename: 'Home';
    id: string;
    addressLine1?: string | null;
    addressLine2?: string | null;
    city?: string | null;
    addressState?: string | null;
    country?: string | null;
    zipcode: string;
    yearBuilt?: number | null;
    outDoorArea?: number | null;
    livableArea: number;
    bedroomCount: number;
    bathroomCount?: number | null;
    heatingFuelType?: HeatingFuelType | null;
    heaterAge?: AgeType | null;
    waterHeaterFuelType?: WaterHeaterFuelType | null;
    waterHeaterAge?: AgeType | null;
    hasAirConditioner?: boolean | null;
    hasPool?: boolean | null;
    hasHotTub?: boolean | null;
    annualElectricalEnergyUsage?: number | null;
    annualGasPropaneEnergyUsage?: number | null;
    annualWaterUsage?: number | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    homeOwners?: {
      __typename: 'ModelHomeOwnerConnection';
      items: Array<{
        __typename: 'HomeOwner';
        id: string;
        homeID: string;
        homeOwnerID: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        createdAt: string;
        updatedAt: string;
        homeOwner: {
          __typename: 'User';
          id: string;
          username: string;
          displayName: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        };
        owner?: string | null;
        home: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        };
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    owner?: string | null;
    homeowners?: string | null;
    responses?: {
      __typename: 'ModelResponseConnection';
      items: Array<{
        __typename: 'Response';
        id: string;
        homeID: string;
        questionID: string;
        answer: string;
        createdAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        updatedAt: string;
        home?: {
          __typename: 'Home';
          id: string;
          addressLine1?: string | null;
          addressLine2?: string | null;
          city?: string | null;
          addressState?: string | null;
          country?: string | null;
          zipcode: string;
          yearBuilt?: number | null;
          outDoorArea?: number | null;
          livableArea: number;
          bedroomCount: number;
          bathroomCount?: number | null;
          heatingFuelType?: HeatingFuelType | null;
          heaterAge?: AgeType | null;
          waterHeaterFuelType?: WaterHeaterFuelType | null;
          waterHeaterAge?: AgeType | null;
          hasAirConditioner?: boolean | null;
          hasPool?: boolean | null;
          hasHotTub?: boolean | null;
          annualElectricalEnergyUsage?: number | null;
          annualGasPropaneEnergyUsage?: number | null;
          annualWaterUsage?: number | null;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          homeowners?: string | null;
        } | null;
        question?: {
          __typename: 'Question';
          id: string;
          title: string;
          questionText: string;
          rewardText: string;
          level: Level;
          cost: Cost;
          categories: Array<Category>;
          type: ResponseType;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
  } | null;
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?: {
    __typename: 'Question';
    id: string;
    title: string;
    questionText: string;
    rewardText: string;
    level: Level;
    cost: Cost;
    categories: Array<Category>;
    type: ResponseType;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateResponseSubscription = {
  onCreateResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse?: {
    __typename: 'Response';
    id: string;
    homeID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    home?: {
      __typename: 'Home';
      id: string;
      addressLine1?: string | null;
      addressLine2?: string | null;
      city?: string | null;
      addressState?: string | null;
      country?: string | null;
      zipcode: string;
      yearBuilt?: number | null;
      outDoorArea?: number | null;
      livableArea: number;
      bedroomCount: number;
      bathroomCount?: number | null;
      heatingFuelType?: HeatingFuelType | null;
      heaterAge?: AgeType | null;
      waterHeaterFuelType?: WaterHeaterFuelType | null;
      waterHeaterAge?: AgeType | null;
      hasAirConditioner?: boolean | null;
      hasPool?: boolean | null;
      hasHotTub?: boolean | null;
      annualElectricalEnergyUsage?: number | null;
      annualGasPropaneEnergyUsage?: number | null;
      annualWaterUsage?: number | null;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      homeOwners?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      owner?: string | null;
      homeowners?: string | null;
      responses?: {
        __typename: 'ModelResponseConnection';
        items: Array<{
          __typename: 'Response';
          id: string;
          homeID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type OnCreateUserResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateUserResponseSubscription = {
  onCreateUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateUserResponseSubscription = {
  onUpdateUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserResponseSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteUserResponseSubscription = {
  onDeleteUserResponse?: {
    __typename: 'UserResponse';
    id: string;
    userID: string;
    questionID: string;
    answer: string;
    createdAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
    user?: {
      __typename: 'User';
      id: string;
      username: string;
      displayName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      homes?: {
        __typename: 'ModelHomeOwnerConnection';
        items: Array<{
          __typename: 'HomeOwner';
          id: string;
          homeID: string;
          homeOwnerID: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      responses?: {
        __typename: 'ModelUserResponseConnection';
        items: Array<{
          __typename: 'UserResponse';
          id: string;
          userID: string;
          questionID: string;
          answer: string;
          createdAt: string;
          _version: number;
          _deleted?: boolean | null;
          _lastChangedAt: number;
          updatedAt: string;
          owner?: string | null;
        } | null>;
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
    } | null;
    question?: {
      __typename: 'Question';
      id: string;
      title: string;
      questionText: string;
      rewardText: string;
      level: Level;
      cost: Cost;
      categories: Array<Category>;
      type: ResponseType;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    owner?: string | null;
  } | null;
};