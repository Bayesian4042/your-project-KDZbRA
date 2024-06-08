import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';

@Module({
  controllers: [VenuesController],
  providers: [VenuesService],
  imports: [PrismaModule],
})
export class VenuesModule {}
