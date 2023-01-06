/* Amplify Params - DO NOT EDIT
	API_SAMPLEAPP_BOARDTABLE_ARN
	API_SAMPLEAPP_BOARDTABLE_NAME
	API_SAMPLEAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_SAMPLEAPP_GRAPHQLAPIIDOUTPUT
	API_SAMPLEAPP_GRAPHQLAPIKEYOUTPUT
	API_SAMPLEAPP_PERSONTABLE_ARN
	API_SAMPLEAPP_PERSONTABLE_NAME
	AUTH_SAMPLEAPP_USERPOOLID
	ENV
	REGION
	STORAGE_S3SAMPLEAPPSTORAGE2A25BCAD_BUCKETNAME
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
