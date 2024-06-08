import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TicketTypesService } from './ticket_types.service';
import { TicketTypesController } from './ticket_types.controller';

@Module({
  controllers: [TicketTypesController],
  providers: [TicketTypesService],
  imports: [PrismaModule],
})
export class TicketTypesModule {}
