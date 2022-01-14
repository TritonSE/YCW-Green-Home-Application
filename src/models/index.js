// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Level = {
  "STARTER": "STARTER",
  "INTERMEDIATE": "INTERMEDIATE",
  "GURU": "GURU"
};

const Cost = {
  "ONE": "ONE",
  "TWO": "TWO",
  "THREE": "THREE"
};

const Category = {
  "ENERGY": "ENERGY",
  "RESILIENCY": "RESILIENCY",
  "HEALTH": "HEALTH",
  "WATER": "WATER"
};

const ResponseType = {
  "USER": "USER",
  "HOME": "HOME"
};

const HeatingFuelType = {
  "GAS": "GAS",
  "ELECTRIC": "ELECTRIC",
  "PROPANE": "PROPANE",
  "OTHER": "OTHER"
};

const AgeType = {
  "LESS_THAN_5": "LESS_THAN_5",
  "MORE_THAN_5": "MORE_THAN_5",
  "MORE_THAN_10": "MORE_THAN_10",
  "MORE_THAN_20": "MORE_THAN_20"
};

const WaterHeaterFuelType = {
  "GAS": "GAS",
  "ELECTRIC": "ELECTRIC",
  "OTHER": "OTHER"
};

const { User, HomeOwner, Home, Response, Question, UserResponse, S3Object } = initSchema(schema);

export {
  User,
  HomeOwner,
  Home,
  Response,
  Question,
  UserResponse,
  Level,
  Cost,
  Category,
  ResponseType,
  HeatingFuelType,
  AgeType,
  WaterHeaterFuelType,
  S3Object
};