import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRefundsService } from './payment_refunds.service';

describe('PaymentRefundsService', () => {
  let service: PaymentRefundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentRefundsService],
    }).compile();

    service = module.get<PaymentRefundsService>(PaymentRefundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
