import {
  CreateTableCommand,
  BatchWriteItemCommand,
} from '@aws-sdk/client-dynamodb';

import client from './client';
import { suggestionSchema } from './schema/suggestion.schema';
import { mockData } from './mockData/data';

const main = async () => {
  const createTableCommand = new CreateTableCommand(suggestionSchema);
  const createDataCommand = new BatchWriteItemCommand(mockData);

  try {
    // Create table
    await client.send(createTableCommand);
    // Create data
    await client.send(createDataCommand);
  } catch (e) {
    console.error(e);
  }
};

main()
  .then(() =>
    console.log('================== Success Data Import =================='),
  )
  .catch((e) =>
    console.error(`:( It was not possible to migrate the data \n ${e}`),
  );
