import { Test, TestingModule } from '@nestjs/testing';
import { RevenueAnalyticsController } from './revenue_analytics.controller';
import { RevenueAnalyticsService } from './revenue_analytics.service';

describe('RevenueAnalyticsController', () => {
  let controller: RevenueAnalyticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueAnalyticsController],
      providers: [RevenueAnalyticsService],
    }).compile();

    controller = module.get<RevenueAnalyticsController>(
      RevenueAnalyticsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
