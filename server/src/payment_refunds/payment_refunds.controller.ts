import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PaymentRefundsService } from './payment_refunds.service';
import { CreatePaymentRefundDto } from './dto/create-payment_refund.dto';
import { UpdatePaymentRefundDto } from './dto/update-payment_refund.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('payment-refunds')
@ApiTags('payment-refunds')
export class PaymentRefundsController {
  constructor(private readonly paymentRefundsService: PaymentRefundsService) {}

  @Post()
  create(@Body() createPaymentRefundDto: CreatePaymentRefundDto) {
    return this.paymentRefundsService.create(createPaymentRefundDto);
  }

  @Get()
  findAll() {
    return this.paymentRefundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentRefundsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePaymentRefundDto: UpdatePaymentRefundDto,
  ) {
    return this.paymentRefundsService.update(+id, updatePaymentRefundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentRefundsService.remove(+id);
  }
}
