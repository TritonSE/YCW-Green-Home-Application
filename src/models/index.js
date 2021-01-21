// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Tag = {
  "ENERGY": "ENERGY",
  "RESILIENCY": "RESILIENCY",
  "HEALTH": "HEALTH",
  "MATERIALS": "MATERIALS",
  "EMBODIED_CARBON": "EMBODIED_CARBON",
  "WATER": "WATER"
};

const HomeType = {
  "SINGLE_FAMILY": "SINGLE_FAMILY",
  "DUPLEX": "DUPLEX",
  "TOWNHOUSE": "TOWNHOUSE",
  "APARTMENT_CONDO": "APARTMENT_CONDO"
};

const HeatingFuelType = {
  "GAS": "GAS",
  "ELECTRIC": "ELECTRIC",
  "PROPANE": "PROPANE",
  "OTHER": "OTHER"
};

const WaterHeaterFuelType = {
  "GAS": "GAS",
  "ELECTRIC": "ELECTRIC",
  "OTHER": "OTHER"
};

const { User, HomeOwner, Home, Response, Question, HomeBadge, Badge, S3Object } = initSchema(schema);

export {
  User,
  HomeOwner,
  Home,
  Response,
  Question,
  HomeBadge,
  Badge,
  Tag,
  HomeType,
  HeatingFuelType,
  WaterHeaterFuelType,
  S3Object
};