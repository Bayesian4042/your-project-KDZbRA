import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserRegistrationDto } from './dto/create-user_registration.dto';
import { UpdateUserRegistrationDto } from './dto/update-user_registration.dto';

@Injectable()
export class UserRegistrationsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserRegistrationDto: CreateUserRegistrationDto) {
    return this.prismaService.user_registrations.create({
      data: { ...createUserRegistrationDto },
    });
  }

  findAll() {
    return this.prismaService.user_registrations.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user_registrations.findUnique({ where: { id } });
  }

  update(id: number, updateUserRegistrationDto: UpdateUserRegistrationDto) {
    return this.prismaService.user_registrations.update({
      where: { id },
      data: { ...updateUserRegistrationDto },
    });
  }

  remove(id: number) {
    return this.prismaService.user_registrations.delete({ where: { id } });
  }
}
