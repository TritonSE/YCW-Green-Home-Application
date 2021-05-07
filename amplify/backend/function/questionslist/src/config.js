const Config = {
  region: process.env.REGION,  
  tableName: `Question-${process.env.API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
}

module.exports = { Config };
