import { Test, TestingModule } from '@nestjs/testing';
import { RecurrenceRulesService } from './recurrence_rules.service';

describe('RecurrenceRulesService', () => {
  let service: RecurrenceRulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecurrenceRulesService],
    }).compile();

    service = module.get<RecurrenceRulesService>(RecurrenceRulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
