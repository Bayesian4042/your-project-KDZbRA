import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PaymentRefundsService } from './payment_refunds.service';
import { PaymentRefundsController } from './payment_refunds.controller';

@Module({
  controllers: [PaymentRefundsController],
  providers: [PaymentRefundsService],
  imports: [PrismaModule],
})
export class PaymentRefundsModule {}
