import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserTicketDto } from './dto/create-user_ticket.dto';
import { UpdateUserTicketDto } from './dto/update-user_ticket.dto';

@Injectable()
export class UserTicketsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserTicketDto: CreateUserTicketDto) {
    return this.prismaService.user_tickets.create({
      data: { ...createUserTicketDto },
    });
  }

  findAll() {
    return this.prismaService.user_tickets.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user_tickets.findUnique({ where: { id } });
  }

  update(id: number, updateUserTicketDto: UpdateUserTicketDto) {
    return this.prismaService.user_tickets.update({
      where: { id },
      data: { ...updateUserTicketDto },
    });
  }

  remove(id: number) {
    return this.prismaService.user_tickets.delete({ where: { id } });
  }
}
