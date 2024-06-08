import { Test, TestingModule } from '@nestjs/testing';
import { RevenueAnalyticsService } from './revenue_analytics.service';

describe('RevenueAnalyticsService', () => {
  let service: RevenueAnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueAnalyticsService],
    }).compile();

    service = module.get<RevenueAnalyticsService>(RevenueAnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
