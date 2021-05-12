const Config = {
  region: process.env.REGION,  
  tableName: `User-${process.env.API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
}

module.exports = { Config };
