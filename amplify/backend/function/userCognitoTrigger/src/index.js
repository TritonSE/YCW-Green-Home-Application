/* Amplify Params - DO NOT EDIT
	API_YOURCLEARWAYAPI_GRAPHQLAPIIDOUTPUT
	API_YOURCLEARWAYAPI_USERTABLE_ARN
	API_YOURCLEARWAYAPI_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const { Config } = require('./config');
AWS.config.update({ region: Config.region });

const ddb = new AWS.DynamoDB();

exports.handler = async (event, context) => {
    let date = new Date();

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {        
        // Write new User to DynamoDB
        let payload = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                '__typename': {S: 'User'},
                'username': {S: event.request.userAttributes.email },
                'displayName': {S: event.request.userAttributes['custom:displayName']},
                'owner': {S: event.request.userAttributes.sub},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: Config.tableName
        };

        // Call DynamoDB
        try {
            await ddb.putItem(payload).promise();
            console.log("Success created new user");
            context.done(null, event);
        } catch (err) {
            console.error("Error", err);
            context.fail(err)
        }

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};
