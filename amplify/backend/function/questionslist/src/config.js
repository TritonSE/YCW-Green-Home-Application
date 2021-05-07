const dotenv = require('dotenv');

dotenv.config();

const Config = {
  region: process.env.REGION,  
  tableName: `Question-${process.env.API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT}-${process.env.ENV}`,
}

console.log(Config.tableName);

module.exports = { Config };
