import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVenueDto: CreateVenueDto) {
    return this.prismaService.venues.create({ data: { ...createVenueDto } });
  }

  findAll() {
    return this.prismaService.venues.findMany();
  }

  findOne(id: number) {
    return this.prismaService.venues.findUnique({ where: { id } });
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.prismaService.venues.update({
      where: { id },
      data: { ...updateVenueDto },
    });
  }

  remove(id: number) {
    return this.prismaService.venues.delete({ where: { id } });
  }
}
