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
  'Ceiling Fans': xmlsToObj(XMLs.ceilingFansXML, XMLs.grayCeilingFansXML),
  'Smart Thermostat': xmlsToObj(
    XMLs.smartThermostatXML,
    XMLs.graySmartThermostatXML,
  ),
  'LED Lights': xmlsToObj(XMLs.ledLightsXML, XMLs.grayLedLightsXML),
  'Insulated Cellular Shades': xmlsToObj(
    XMLs.insulatedCellularShadesXML,
    XMLs.grayInsulatedCellularShadesXML,
  ),
  'Washing Machines': xmlsToObj(
    XMLs.washingMachinesXML,
    XMLs.grayWashingMachinesXML,
  ),
  Dryers: xmlsToObj(XMLs.dryersXML, XMLs.grayDryersXML),
  'Laundry Line': xmlsToObj(XMLs.laundryLineXML, XMLs.grayLaundryLineXML),
  Refrigerator: xmlsToObj(XMLs.refrigeratorXML, XMLs.grayRefrigeratorXML),
  'Energy Monitoring System': xmlsToObj(
    XMLs.energyMonitoringSystemXML,
    XMLs.grayEnergyMonitoringSystemXML,
  ),
  'Natural Site': xmlsToObj(XMLs.naturalSiteXML, XMLs.grayNaturalSiteXML),
  'Rainwater Harvesting System': xmlsToObj(
    XMLs.rainwaterHarvestingSystemXML,
    XMLs.grayRainwaterHarvestingSystemXML,
  ),
  'Shortened Shower': xmlsToObj(
    XMLs.shortenedShowerXML,
    XMLs.grayShortenedShowerXML,
  ),
  Compost: xmlsToObj(XMLs.compostXML, XMLs.grayCompostXML),
  'Cooking Circulation': xmlsToObj(
    XMLs.cookingCirculationXML,
    XMLs.grayCookingCirculationXML,
  ),
  'Lower Thermostat': xmlsToObj(
    XMLs.lowerThermostatXML,
    XMLs.grayLowerThermostatXML,
  ),
  'Ducts Sealed': xmlsToObj(XMLs.ductsSealedXML, XMLs.grayDuctsSealedXML),
  'Air Sealed Home': xmlsToObj(
    XMLs.airSealedHomeXML,
    XMLs.grayAirSealedHomeXML,
  ),
  'Home Insulation Standard': xmlsToObj(
    XMLs.homeInsulStandardXML,
    XMLs.grayHomeInsulStandardXML,
  ),
  'Built Landscape': xmlsToObj(
    XMLs.builtLandscapeXML,
    XMLs.grayBuiltLandscapeXML,
  ),
  'Exterior Deck': xmlsToObj(XMLs.exteriorDeckXML, XMLs.grayExteriorDeckXML),
  'Home Insulation Recycled Material': xmlsToObj(
    XMLs.homeInsulRecycledMaterialXML,
    XMLs.grayHomeInsulRecycledMaterialXML,
  ),
  'Home Insulation Batt or Loose-fill': xmlsToObj(
    XMLs.homeInsulBattOrLooseFillXML,
    XMLs.grayHomeInsulBattOrLooseFillXML,
  ),
  'Energy Audit': xmlsToObj(XMLs.energyAuditXML, XMLs.grayEnergyAuditXML),
  "Home's Certified": xmlsToObj(
    XMLs.homeCertifiedXML,
    XMLs.grayHomeCertifiedXML,
  ),
  'Ductwork Pressure Balance': xmlsToObj(
    XMLs.ductworkPressureBalanceXML,
    XMLs.grayDuctworkPressureBalanceXML,
  ),
  'HVAC Air Flow': xmlsToObj(XMLs.hvacAirFlowXML, XMLs.grayHVACAirFlowXML),
  'Energy Offset': xmlsToObj(XMLs.energyOffsetXML, XMLs.grayEnergyOffsetXML),
  'Battery Storage': xmlsToObj(
    XMLs.batteryStorageXML,
    XMLs.grayBatteryStorageXML,
  ),
  'Fast Charging Station': xmlsToObj(
    XMLs.fastChargingStationXML,
    XMLs.grayFastChargingStationXML,
  ),
  'Heat Pump Water Heater': xmlsToObj(
    XMLs.heatPumpWaterHeaterXML,
    XMLs.grayHeatPumpWaterHeaterXML,
  ),
  'Tankless Water Heater': xmlsToObj(
    XMLs.tanklessWaterHeaterXML,
    XMLs.grayTanklessWaterHeaterXML,
  ),
  'Condensing Water Heater': xmlsToObj(
    XMLs.condensingWaterHeaterXML,
    XMLs.grayCondensingWaterHeaterXML,
  ),
};

export default badgeXMLs;
