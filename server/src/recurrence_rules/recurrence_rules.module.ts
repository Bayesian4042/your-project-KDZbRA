import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { RecurrenceRulesService } from './recurrence_rules.service';
import { RecurrenceRulesController } from './recurrence_rules.controller';

@Module({
  controllers: [RecurrenceRulesController],
  providers: [RecurrenceRulesService],
  imports: [PrismaModule],
})
export class RecurrenceRulesModule {}
