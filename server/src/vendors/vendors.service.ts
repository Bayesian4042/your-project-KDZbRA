import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Injectable()
export class VendorsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createVendorDto: CreateVendorDto) {
    return this.prismaService.vendors.create({ data: { ...createVendorDto } });
  }

  findAll() {
    return this.prismaService.vendors.findMany();
  }

  findOne(id: number) {
    return this.prismaService.vendors.findUnique({ where: { id } });
  }

  update(id: number, updateVendorDto: UpdateVendorDto) {
    return this.prismaService.vendors.update({
      where: { id },
      data: { ...updateVendorDto },
    });
  }

  remove(id: number) {
    return this.prismaService.vendors.delete({ where: { id } });
  }
}
