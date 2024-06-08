import { Test, TestingModule } from '@nestjs/testing';
import { UserRegistrationsController } from './user_registrations.controller';
import { UserRegistrationsService } from './user_registrations.service';

describe('UserRegistrationsController', () => {
  let controller: UserRegistrationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRegistrationsController],
      providers: [UserRegistrationsService],
    }).compile();

    controller = module.get<UserRegistrationsController>(
      UserRegistrationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
