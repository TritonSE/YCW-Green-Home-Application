// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Difficulty = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "ADVANCED": "ADVANCED"
};

const Cost = {
  "ONE": "ONE",
  "TWI": "TWI",
  "THREE": "THREE",
  "FOUR": "FOUR"
};

const Type = {
  "HOME_IMPROVEMENT": "HOME_IMPROVEMENT",
  "GREEN_LIFESTYLE": "GREEN_LIFESTYLE"
};

const Tag = {
  "ENERGY": "ENERGY",
  "RESILIENCY": "RESILIENCY",
  "HEALTH": "HEALTH",
  "MATERIALS": "MATERIALS",
  "EMBODIED_CARBON": "EMBODIED_CARBON",
  "WATER": "WATER"
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

const { User, HomeOwner, Home, Response, Question, S3Object } = initSchema(schema);

export {
  User,
  HomeOwner,
  Home,
  Response,
  Question,
  Difficulty,
  Cost,
  Type,
  Tag,
  HeatingFuelType,
  AgeType,
  WaterHeaterFuelType,
  S3Object
};