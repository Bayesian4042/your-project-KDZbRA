import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {

    constructor(private readonly prismaService: PrismaService) {}


  
        create(createPaymentDto: CreatePaymentDto) {
            return this.prismaService.payments.create({ data: { ...createPaymentDto } });
        }
        

  
        findAll() {
            return this.prismaService.payments.findMany();
        }
        

  findOne(id: number) { return this.prismaService.payments.findUnique({ where: { id }  }); }

  
        update(id: number, updatePaymentDto: UpdatePaymentDto) {
            return this.prismaService.payments.update({ where: { id }, data: {...updatePaymentDto } })
        }

  
        remove(id: number) {
            return this.prismaService.payments.delete({ where: { id } });
        }
}
