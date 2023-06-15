import { Injectable } from '@nestjs/common';
import { QueryCommandOutput } from '@aws-sdk/lib-dynamodb';

import getSuggestions from '../db/suggestions/getSuggestions';

@Injectable()
export class SuggestionsService {
  getSuggestion(like: string): Promise<QueryCommandOutput> {
    return getSuggestions(like);
  }
}
