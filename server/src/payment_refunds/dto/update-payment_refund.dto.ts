import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentRefundDto } from './create-payment_refund.dto';

export class UpdatePaymentRefundDto extends PartialType(
  CreatePaymentRefundDto,
) {}
