import { Test, TestingModule } from '@nestjs/testing';
import { SuggestionsController } from './suggestions.controller';
import { SuggestionsService } from './suggestions.service';
import { QueryCommandOutput } from '@aws-sdk/lib-dynamodb';

describe('SuggestionsController', () => {
  let controller: SuggestionsController;
  let suggestionsService: SuggestionsService;

  const result = {
    items: ['test'],
    $metadata: {
      httpStatusCode: 200,
      requestId: '5134a724-29cb-4f77-9706-e01f31aac144',
      attempts: 1,
      totalRetryDelay: 0,
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuggestionsController],
      providers: [SuggestionsService],
    }).compile();
    suggestionsService = module.get<SuggestionsService>(SuggestionsService);
    controller = module.get<SuggestionsController>(SuggestionsController);

    jest
      .spyOn(suggestionsService, 'getSuggestion')
      .mockImplementation(
        () => new Promise((resolve) => resolve(result as QueryCommandOutput)),
      );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the service', async () => {
    expect(await controller.findSuggestion({ interest: 'example' })).toBe(
      result,
    );
  });

  it('generate error by empty interest param', () => {
    expect(() => controller.findSuggestion({ interest: '' })).toThrow(
      'The param interest is required',
    );
  });

  it('generate error by param not found', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => controller.findSuggestion()).toThrow(
      'The param interest is required',
    );
  });
});
