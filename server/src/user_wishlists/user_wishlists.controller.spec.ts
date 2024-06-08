import { Test, TestingModule } from '@nestjs/testing';
import { UserWishlistsController } from './user_wishlists.controller';
import { UserWishlistsService } from './user_wishlists.service';

describe('UserWishlistsController', () => {
  let controller: UserWishlistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWishlistsController],
      providers: [UserWishlistsService],
    }).compile();

    controller = module.get<UserWishlistsController>(UserWishlistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
