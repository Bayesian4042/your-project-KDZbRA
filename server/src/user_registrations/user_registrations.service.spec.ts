import { Test, TestingModule } from '@nestjs/testing';
import { UserRegistrationsService } from './user_registrations.service';

describe('UserRegistrationsService', () => {
  let service: UserRegistrationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRegistrationsService],
    }).compile();

    service = module.get<UserRegistrationsService>(UserRegistrationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
