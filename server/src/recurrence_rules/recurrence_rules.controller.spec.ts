import { Test, TestingModule } from '@nestjs/testing';
import { RecurrenceRulesController } from './recurrence_rules.controller';
import { RecurrenceRulesService } from './recurrence_rules.service';

describe('RecurrenceRulesController', () => {
  let controller: RecurrenceRulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecurrenceRulesController],
      providers: [RecurrenceRulesService],
    }).compile();

    controller = module.get<RecurrenceRulesController>(
      RecurrenceRulesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
