import { Test, TestingModule } from '@nestjs/testing';
import { UserWishlistsService } from './user_wishlists.service';

describe('UserWishlistsService', () => {
  let service: UserWishlistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWishlistsService],
    }).compile();

    service = module.get<UserWishlistsService>(UserWishlistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
