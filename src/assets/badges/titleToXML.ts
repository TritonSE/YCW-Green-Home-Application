import * as XMLs from './svgXMLs';

interface xmlObj {
  normal: string;
  grayscale: string;
}

interface badgeXMLObj {
  [key: string]: xmlObj;
}

const xmlsToObj = (normalXML: string, grayscaleXML: string): xmlObj => {
  return {
    normal: normalXML,
    grayscale: grayscaleXML,
  };
};

const badgeXMLs: badgeXMLObj = {
  'Ceiling Fans': XMLs.ceilingFansXML,
  'Smart Thermostat': XMLs.smartThermostatXML,
  'LED Lights': XMLs.ledLightsXML,
  'Insulated Cellular Shades': XMLs.insulatedCellularShadesXML,
  'Washing Machines': XMLs.washingMachinesXML,
  Dryers: XMLs.dryersXML,
  'Laundry Line': XMLs.laundryLineXML,
  Refrigerator: XMLs.refrigeratorXML,
  'Energy Monitoring System': XMLs.energyMonitoringSystemXML,
  'Natural Site': XMLs.naturalSiteXML,
  'Rainwater Harvesting System': XMLs.rainwaterHarvestingSystemXML,
  'Shortened Shower': XMLs.shortenedShowerXML,
  Compost: XMLs.compostXML,
  'Cooking Circulation': XMLs.cookingCirculationXML,
  'Lower Thermostat': XMLs.lowerThermostatXML,
  'Ducts Sealed': XMLs.ductsSealedXML,
  'Air Sealed Home': XMLs.airSealedHomeXML,
  'Home Insulation Standard': XMLs.homeInsulStandardXML,
  'Built Landscape': XMLs.builtLandscapeXML,
  'Exterior Deck': XMLs.exteriorDeckXML,
  'Home Insulation Recycled Material': XMLs.homeInsulRecycledMaterialXML,
  'Home Insulation Batt or Loose-fill': XMLs.homeInsulBattOrLooseFillXML,
  'Energy Audit': XMLs.energyAuditXML,
  "Home's Certified": XMLs.homeCertifiedXML,
  'Ductwork Pressure Balance': XMLs.ductworkPressureBalanceXML,
  'HVAC Air Flow': XMLs.hvacAirFlowXML,
  'Energy Offset': XMLs.energyOffsetXML,
  'Battery Storage': XMLs.batteryStorageXML,
  'Fast Charging Station': XMLs.fastChargingStationXML,
  'Heat Pump Water Heater': XMLs.heatPumpWaterHeaterXML,
  'Tankless Water Heater': XMLs.tanklessWaterHeaterXML,
  'Condensing Water Heater': XMLs.condensingWaterHeaterXML,
};

export default badgeXMLs;
