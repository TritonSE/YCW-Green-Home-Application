import {
  AgeType,
  CreateHomeInput,
  HeatingFuelType,
  WaterHeaterFuelType,
} from '../../API';

export const states = [
  { label: 'AK', value: 'AK' },
  { label: 'AL', value: 'AL' },
  { label: 'AR', value: 'AR' },
  { label: 'AZ', value: 'AZ' },
  { label: 'CA', value: 'CA' },
  { label: 'CO', value: 'CO' },
  { label: 'CT', value: 'CT' },
  { label: 'DC', value: 'DC' },
  { label: 'DE', value: 'DE' },
  { label: 'FL', value: 'FL' },
  { label: 'GA', value: 'GA' },
  { label: 'HI', value: 'HI' },
  { label: 'IA', value: 'IA' },
  { label: 'ID', value: 'ID' },
  { label: 'IL', value: 'IL' },
  { label: 'IN', value: 'IN' },
  { label: 'KS', value: 'KS' },
  { label: 'KY', value: 'KY' },
  { label: 'LA', value: 'LA' },
  { label: 'MA', value: 'MA' },
  { label: 'MD', value: 'MD' },
  { label: 'ME', value: 'ME' },
  { label: 'MI', value: 'MI' },
  { label: 'MN', value: 'MN' },
  { label: 'MO', value: 'MO' },
  { label: 'MS', value: 'MS' },
  { label: 'MT', value: 'MT' },
  { label: 'NC', value: 'NC' },
  { label: 'ND', value: 'ND' },
  { label: 'NE', value: 'NE' },
  { label: 'NH', value: 'NH' },
  { label: 'NJ', value: 'NJ' },
  { label: 'NM', value: 'NM' },
  { label: 'NV', value: 'NV' },
  { label: 'NY', value: 'NY' },
  { label: 'OH', value: 'OH' },
  { label: 'OK', value: 'OK' },
  { label: 'OR', value: 'OR' },
  { label: 'PA', value: 'PA' },
  { label: 'RI', value: 'RI' },
  { label: 'SC', value: 'SC' },
  { label: 'SD', value: 'SD' },
  { label: 'TN', value: 'TN' },
  { label: 'TX', value: 'TX' },
  { label: 'UT', value: 'UT' },
  { label: 'VA', value: 'VA' },
  { label: 'VT', value: 'VT' },
  { label: 'WA', value: 'WA' },
  { label: 'WI', value: 'WI' },
  { label: 'WV', value: 'WV' },
  { label: 'WY', value: 'WY' },
];

export const homeInfo: CreateHomeInput = {
  bedroomCount: 0,
  livableArea: 0,
  zipcode: '',
  addressLine1: '',
  addressState: '',
  annualElectricalEnergyUsage: 0,
  annualGasPropaneEnergyUsage: 0,
  annualWaterUsage: 0,
  bathroomCount: 0,
  city: '',
  country: '',
  hasAirConditioner: false,
  hasHotTub: false,
  hasPool: false,
  heaterAge: null,
  heatingFuelType: null,
  outDoorArea: 0,
  waterHeaterAge: null,
  waterHeaterFuelType: null,
  yearBuilt: 0,
};
