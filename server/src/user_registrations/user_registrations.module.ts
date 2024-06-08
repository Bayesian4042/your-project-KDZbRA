import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserRegistrationsService } from './user_registrations.service';
import { UserRegistrationsController } from './user_registrations.controller';

@Module({
  controllers: [UserRegistrationsController],
  providers: [UserRegistrationsService],
  imports: [PrismaModule],
})
export class UserRegistrationsModule {}
