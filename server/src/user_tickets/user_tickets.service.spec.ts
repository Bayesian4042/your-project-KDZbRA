import { Test, TestingModule } from '@nestjs/testing';
import { UserTicketsService } from './user_tickets.service';

describe('UserTicketsService', () => {
  let service: UserTicketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTicketsService],
    }).compile();

    service = module.get<UserTicketsService>(UserTicketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
