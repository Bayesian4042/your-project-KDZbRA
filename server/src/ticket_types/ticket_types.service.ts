import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';

@Injectable()
export class TicketTypesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTicketTypeDto: CreateTicketTypeDto) {
    return this.prismaService.ticket_types.create({
      data: { ...createTicketTypeDto },
    });
  }

  findAll() {
    return this.prismaService.ticket_types.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ticket_types.findUnique({ where: { id } });
  }

  update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.prismaService.ticket_types.update({
      where: { id },
      data: { ...updateTicketTypeDto },
    });
  }

  remove(id: number) {
    return this.prismaService.ticket_types.delete({ where: { id } });
  }
}
