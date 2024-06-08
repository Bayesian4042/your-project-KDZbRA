import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { RevenueAnalyticsService } from './revenue_analytics.service';
import { RevenueAnalyticsController } from './revenue_analytics.controller';

@Module({
  controllers: [RevenueAnalyticsController],
  providers: [RevenueAnalyticsService],
  imports: [PrismaModule],
})
export class RevenueAnalyticsModule {}
