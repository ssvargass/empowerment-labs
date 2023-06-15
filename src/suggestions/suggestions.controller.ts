import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { QueryCommandOutput } from '@aws-sdk/lib-dynamodb';
import { get } from 'lodash';

import { SuggestionsService } from './suggestions.service';
import { GetSuggestionDto } from './dto/get-suggestion.dto';

@Controller('suggestions')
export class SuggestionsController {
  constructor(private readonly suggestionsService: SuggestionsService) {}

  @Get()
  findSuggestion(
    @Query() suggestionDto: GetSuggestionDto,
  ): Promise<QueryCommandOutput> {
    const interest = get(suggestionDto, 'interest', '');
    if (interest === '') {
      throw new BadRequestException('The param interest is required');
    }
    return this.suggestionsService.getSuggestion(interest);
  }
}
