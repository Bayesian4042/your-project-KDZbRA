import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserWishlistsService } from './user_wishlists.service';
import { UserWishlistsController } from './user_wishlists.controller';

@Module({
  controllers: [UserWishlistsController],
  providers: [UserWishlistsService],
  imports: [PrismaModule],
})
export class UserWishlistsModule {}
