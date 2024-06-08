import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRegistrationsService } from './user_registrations.service';
import { CreateUserRegistrationDto } from './dto/create-user_registration.dto';
import { UpdateUserRegistrationDto } from './dto/update-user_registration.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-registrations')
@ApiTags('user-registrations')
export class UserRegistrationsController {
  constructor(
    private readonly userRegistrationsService: UserRegistrationsService,
  ) {}

  @Post()
  create(@Body() createUserRegistrationDto: CreateUserRegistrationDto) {
    return this.userRegistrationsService.create(createUserRegistrationDto);
  }

  @Get()
  findAll() {
    return this.userRegistrationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRegistrationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserRegistrationDto: UpdateUserRegistrationDto,
  ) {
    return this.userRegistrationsService.update(+id, updateUserRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRegistrationsService.remove(+id);
  }
}
