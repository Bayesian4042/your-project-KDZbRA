import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserTicketsService } from './user_tickets.service';
import { UserTicketsController } from './user_tickets.controller';

@Module({
  controllers: [UserTicketsController],
  providers: [UserTicketsService],
  imports: [PrismaModule],
})
export class UserTicketsModule {}
