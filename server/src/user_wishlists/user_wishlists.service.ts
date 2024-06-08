import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserWishlistDto } from './dto/create-user_wishlist.dto';
import { UpdateUserWishlistDto } from './dto/update-user_wishlist.dto';

@Injectable()
export class UserWishlistsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserWishlistDto: CreateUserWishlistDto) {
    return this.prismaService.user_wishlists.create({
      data: { ...createUserWishlistDto },
    });
  }

  findAll() {
    return this.prismaService.user_wishlists.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user_wishlists.findUnique({ where: { id } });
  }

  update(id: number, updateUserWishlistDto: UpdateUserWishlistDto) {
    return this.prismaService.user_wishlists.update({
      where: { id },
      data: { ...updateUserWishlistDto },
    });
  }

  remove(id: number) {
    return this.prismaService.user_wishlists.delete({ where: { id } });
  }
}
