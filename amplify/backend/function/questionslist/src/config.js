const dotenv = require('dotenv');

dotenv.config();

const Config = {
  AWS_REGION: process.env.AWS_REGION,
  TABLE_NAME: process.env.TABLE_NAME,
}

module.exports = { Config };
