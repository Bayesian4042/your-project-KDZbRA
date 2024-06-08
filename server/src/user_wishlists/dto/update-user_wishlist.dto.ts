import { PartialType } from '@nestjs/mapped-types';
import { CreateUserWishlistDto } from './create-user_wishlist.dto';

export class UpdateUserWishlistDto extends PartialType(CreateUserWishlistDto) {}
