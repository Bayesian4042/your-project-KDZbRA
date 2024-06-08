import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRegistrationDto } from './create-user_registration.dto';

export class UpdateUserRegistrationDto extends PartialType(
  CreateUserRegistrationDto,
) {}
