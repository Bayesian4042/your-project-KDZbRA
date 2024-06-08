import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserWishlistsService } from './user_wishlists.service';
import { CreateUserWishlistDto } from './dto/create-user_wishlist.dto';
import { UpdateUserWishlistDto } from './dto/update-user_wishlist.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-wishlists')
@ApiTags('user-wishlists')
export class UserWishlistsController {
  constructor(private readonly userWishlistsService: UserWishlistsService) {}

  @Post()
  create(@Body() createUserWishlistDto: CreateUserWishlistDto) {
    return this.userWishlistsService.create(createUserWishlistDto);
  }

  @Get()
  findAll() {
    return this.userWishlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWishlistsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserWishlistDto: UpdateUserWishlistDto,
  ) {
    return this.userWishlistsService.update(+id, updateUserWishlistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWishlistsService.remove(+id);
  }
}
