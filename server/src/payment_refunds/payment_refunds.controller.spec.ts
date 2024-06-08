import { Test, TestingModule } from '@nestjs/testing';
import { PaymentRefundsController } from './payment_refunds.controller';
import { PaymentRefundsService } from './payment_refunds.service';

describe('PaymentRefundsController', () => {
  let controller: PaymentRefundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentRefundsController],
      providers: [PaymentRefundsService],
    }).compile();

    controller = module.get<PaymentRefundsController>(PaymentRefundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
