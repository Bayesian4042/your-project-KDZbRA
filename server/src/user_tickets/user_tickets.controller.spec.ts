import { Test, TestingModule } from '@nestjs/testing';
import { UserTicketsController } from './user_tickets.controller';
import { UserTicketsService } from './user_tickets.service';

describe('UserTicketsController', () => {
  let controller: UserTicketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTicketsController],
      providers: [UserTicketsService],
    }).compile();

    controller = module.get<UserTicketsController>(UserTicketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
