import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Tag {
  ENERGY = "ENERGY",
  RESILIENCY = "RESILIENCY",
  HEALTH = "HEALTH",
  MATERIALS = "MATERIALS",
  EMBODIED_CARBON = "EMBODIED_CARBON",
  WATER = "WATER"
}

export enum HomeType {
  SINGLE_FAMILY = "SINGLE_FAMILY",
  DUPLEX = "DUPLEX",
  TOWNHOUSE = "TOWNHOUSE",
  APARTMENT_CONDO = "APARTMENT_CONDO"
}

export enum HeatingFuelType {
  GAS = "GAS",
  ELECTRIC = "ELECTRIC",
  PROPANE = "PROPANE",
  OTHER = "OTHER"
}

export enum WaterHeaterFuelType {
  GAS = "GAS",
  ELECTRIC = "ELECTRIC",
  OTHER = "OTHER"
}

export declare class MutateResponseOutput {
  readonly response?: Response;
  readonly rewards?: (Reward | null)[];
  readonly newBadges?: (Badge | null)[];
  constructor(init: ModelInit<MutateResponseOutput>);
}

export declare class Reward {
  readonly points: number;
  readonly tag: Tag | keyof typeof Tag;
  constructor(init: ModelInit<Reward>);
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Response {
  readonly id: string;
  readonly home?: Home;
  readonly question?: Question;
  readonly answers?: (string | null)[];
  constructor(init: ModelInit<Response>);
  static copyOf(source: Response, mutator: (draft: MutableModel<Response>) => MutableModel<Response> | void): Response;
}

export declare class Home {
  readonly id: string;
  readonly homeOwners?: (HomeOwner | null)[];
  readonly responses?: (Response | null)[];
  readonly badges?: (HomeBadge | null)[];
  readonly homeType: HomeType | keyof typeof HomeType;
  readonly addressLine1: string;
  readonly addressLine2?: string;
  readonly city: string;
  readonly addressState: string;
  readonly country: string;
  readonly zipcode: string;
  readonly yearBuilt: number;
  readonly electricProvider: string;
  readonly gasProvider: string;
  readonly outDoorArea: number;
  readonly livableArea: number;
  readonly bedroomCount: number;
  readonly bathroomCount: number;
  readonly heatingFuelType: HeatingFuelType | keyof typeof HeatingFuelType;
  readonly heaterAge: number;
  readonly waterHeaterFuelType: WaterHeaterFuelType | keyof typeof WaterHeaterFuelType;
  readonly waterHeaterAge: number;
  readonly hasAirConditioner: boolean;
  readonly hasPool: boolean;
  readonly hasHotTub: boolean;
  readonly annualElectricalEnergyUsage: number;
  readonly annualGasPropaneEnergyUsage: number;
  readonly annualWaterUsage: number;
  constructor(init: ModelInit<Home>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home>) => MutableModel<Home> | void): Home;
}

export declare class HomeOwner {
  readonly id: string;
  readonly home: Home;
  readonly homeOwner: User;
  constructor(init: ModelInit<HomeOwner>);
  static copyOf(source: HomeOwner, mutator: (draft: MutableModel<HomeOwner>) => MutableModel<HomeOwner> | void): HomeOwner;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly phoneNumber?: string;
  readonly homes?: (HomeOwner | null)[];
  readonly ownElectricVehicle: boolean;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class HomeBadge {
  readonly id: string;
  readonly home: Home;
  readonly badge: Badge;
  constructor(init: ModelInit<HomeBadge>);
  static copyOf(source: HomeBadge, mutator: (draft: MutableModel<HomeBadge>) => MutableModel<HomeBadge> | void): HomeBadge;
}

export declare class Badge {
  readonly id: string;
  readonly name: string;
  readonly type: Tag | keyof typeof Tag;
  readonly criteria: number;
  readonly logoName: string;
  readonly homes?: (HomeBadge | null)[];
  constructor(init: ModelInit<Badge>);
  static copyOf(source: Badge, mutator: (draft: MutableModel<Badge>) => MutableModel<Badge> | void): Badge;
}

export declare class Question {
  readonly id: string;
  readonly text: string;
  readonly tags?: (Tag | null)[] | keyof typeof Tag;
  readonly responses?: (Response | null)[];
  readonly options?: (string | null)[];
  readonly metadata?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}