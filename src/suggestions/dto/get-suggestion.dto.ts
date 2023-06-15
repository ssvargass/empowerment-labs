import { IsString, MinLength } from 'class-validator';

export class GetSuggestionDto {
  @IsString()
  @MinLength(3)
  interest: string;
}
