const dotenv = require('dotenv');

dotenv.config();

const Config = {
  region: 'us-west-2',
  tableName: process.env.TABLE_NAME,
}

module.exports = { Config };