const https = require('https');
const AWS = require('aws-sdk');
const UrlParse = require('url').URL;
const { Config } = require('./config');
const { loadQuestionsFromCSV } = require('./questions');
const { getMutation } = require('./query');

/* Amplify Params - DO NOT EDIT
	API_YOURCLEARWAYAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  const req = new AWS.HttpRequest(Config.appsyncUrl, Config.region);
  const endpoint = new UrlParse(Config.appsyncUrl).hostname.toString();
  const questions = await loadQuestionsFromCSV();

  console.log(getMutation(questions.slice(0,2)));

  req.method = 'POST';
  req.path = '/graphql';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query: getMutation(questions),
    operationName: 'createQuestion',
  });

  if (Config.apiKey) {
    req.headers["x-api-key"] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, "appsync", true);
    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const data = await new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      result.on('data', (data) => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  return {
    statusCode: 200,
    body: data
  };

};
