import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePaymentRefundDto } from './dto/create-payment_refund.dto';
import { UpdatePaymentRefundDto } from './dto/update-payment_refund.dto';

@Injectable()
export class PaymentRefundsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPaymentRefundDto: CreatePaymentRefundDto) {
    return this.prismaService.payment_refunds.create({
      data: { ...createPaymentRefundDto },
    });
  }

  findAll() {
    return this.prismaService.payment_refunds.findMany();
  }

  findOne(id: number) {
    return this.prismaService.payment_refunds.findUnique({ where: { id } });
  }

  update(id: number, updatePaymentRefundDto: UpdatePaymentRefundDto) {
    return this.prismaService.payment_refunds.update({
      where: { id },
      data: { ...updatePaymentRefundDto },
    });
  }

  remove(id: number) {
    return this.prismaService.payment_refunds.delete({ where: { id } });
  }
}
