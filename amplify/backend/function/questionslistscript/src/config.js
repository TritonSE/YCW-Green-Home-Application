const dotenv = require('dotenv');

dotenv.config();

const Config = {
  region: 'us-west-2',
  appsyncUrl: process.env.API_YOURCLEARWAYAPI_GRAPHQLAPIENDPOINTOUTPUT,
  apiKey: process.env.API_YOURCLEARWAYAPI_GRAPHQLAPIKEYOUTPUT,
}

module.exports = { Config };
