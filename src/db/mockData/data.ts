import { BatchWriteItemInput } from '@aws-sdk/client-dynamodb';

export const mockData: BatchWriteItemInput = {
  RequestItems: {
    Suggestions: [
      {
        PutRequest: {
          Item: {
            PK: { S: 'Alambique' },
            SK: { S: 'restaurant_fusion' },
            tag: { S: 'fusion' },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            PK: { S: 'Alambique' },
            SK: { S: 'restaurant_caribe' },
            tag: { S: 'caribe' },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            PK: { S: 'Lomo Saltao' },
            SK: { S: 'recipe_peruano' },
            tag: { S: 'peruano' },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            PK: { S: 'Lomo Saltao' },
            SK: { S: 'recipe_carne' },
            tag: { S: 'carne' },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            PK: { S: 'Cuzco' },
            SK: { S: 'restaurant_peruano' },
            tag: { S: 'peruano' },
          },
        },
      },
    ],
  },
};
