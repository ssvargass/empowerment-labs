import { Module } from '@nestjs/common';
import { SuggestionsController } from './suggestions/suggestions.controller';
import { SuggestionsService } from './suggestions/suggestions.service';

@Module({
  imports: [],
  controllers: [SuggestionsController],
  providers: [SuggestionsService],
})
export class AppModule {}
