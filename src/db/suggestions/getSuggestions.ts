import {
  QueryCommandInput,
  QueryCommand,
  QueryCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import client from '../client';

const getSuggestions = async (like: string): Promise<QueryCommandOutput> => {
  const getSuggParams: QueryCommandInput = {
    TableName: 'Suggestions',
    IndexName: 'tagsIndexCustom',
    KeyConditionExpression: 'tag= :tagName',
    ExpressionAttributeValues: {
      ':tagName': like,
    },
  };
  const command = new QueryCommand(getSuggParams);
  return await client.send(command);
};
export default getSuggestions;
