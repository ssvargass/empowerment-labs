import { config } from 'dotenv';
import * as process from 'process';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
config();

const dynamoClient = new DynamoDBClient({
  region: process.env.REGION,
  endpoint: process.env.DYNAMO_HOST,
  credentials: {
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.SECRET,
  },
});

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;
