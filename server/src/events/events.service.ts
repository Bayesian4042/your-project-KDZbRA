import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prismaService.events.create({ data: { ...createEventDto } });
  }

  findAll() {
    return this.prismaService.events.findMany();
  }

  findOne(id: number) {
    return this.prismaService.events.findUnique({ where: { id } });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.prismaService.events.update({
      where: { id },
      data: { ...updateEventDto },
    });
  }

  remove(id: number) {
    return this.prismaService.events.delete({ where: { id } });
  }
}
