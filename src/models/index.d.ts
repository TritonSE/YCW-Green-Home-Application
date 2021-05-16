import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Level {
  STARTER = "STARTER",
  INTERMEDIATE = "INTERMEDIATE",
  GURU = "GURU"
}

export enum Cost {
  ONE = "ONE",
  TWO = "TWO",
  THREE = "THREE"
}

export enum Category {
  ENERGY = "ENERGY",
  RESILIENCY = "RESILIENCY",
  HEALTH = "HEALTH",
  WATER = "WATER"
}

export enum HeatingFuelType {
  GAS = "GAS",
  ELECTRIC = "ELECTRIC",
  PROPANE = "PROPANE",
  OTHER = "OTHER"
}

export enum AgeType {
  LESS_THAN_5 = "LESS_THAN_5",
  MORE_THAN_5 = "MORE_THAN_5",
  MORE_THAN_10 = "MORE_THAN_10",
  MORE_THAN_20 = "MORE_THAN_20"
}

export enum WaterHeaterFuelType {
  GAS = "GAS",
  ELECTRIC = "ELECTRIC",
  OTHER = "OTHER"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly displayName: string;
  readonly homes?: (HomeOwner | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class HomeOwner {
  readonly id: string;
  readonly home: Home;
  readonly homeOwner: User;
  constructor(init: ModelInit<HomeOwner>);
  static copyOf(source: HomeOwner, mutator: (draft: MutableModel<HomeOwner>) => MutableModel<HomeOwner> | void): HomeOwner;
}

export declare class Home {
  readonly id: string;
  readonly homeOwners?: (HomeOwner | null)[];
  readonly responses?: (Response | null)[];
  readonly addressLine1?: string;
  readonly addressLine2?: string;
  readonly city?: string;
  readonly addressState?: string;
  readonly country?: string;
  readonly zipcode: string;
  readonly yearBuilt?: number;
  readonly outDoorArea?: number;
  readonly livableArea: number;
  readonly bedroomCount: number;
  readonly bathroomCount?: number;
  readonly heatingFuelType?: HeatingFuelType | keyof typeof HeatingFuelType;
  readonly heaterAge?: AgeType | keyof typeof AgeType;
  readonly waterHeaterFuelType?: WaterHeaterFuelType | keyof typeof WaterHeaterFuelType;
  readonly waterHeaterAge?: AgeType | keyof typeof AgeType;
  readonly hasAirConditioner?: boolean;
  readonly hasPool?: boolean;
  readonly hasHotTub?: boolean;
  readonly annualElectricalEnergyUsage?: number;
  readonly annualGasPropaneEnergyUsage?: number;
  readonly annualWaterUsage?: number;
  constructor(init: ModelInit<Home>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}

export declare class Response {
  readonly id: string;
  readonly questionID: string;
  readonly home?: Home;
  readonly question?: Question;
  readonly answer: string;
  readonly createdAt: string;
  constructor(init: ModelInit<Response>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

export declare class Question {
  readonly id: string;
  readonly title: string;
  readonly questionText: string;
  readonly rewardText: string;
  readonly level: Level | keyof typeof Level;
  readonly cost: Cost | keyof typeof Cost;
  readonly categories: Category[] | keyof typeof Category;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}