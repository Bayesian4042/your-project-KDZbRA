import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRevenueAnalyticDto } from './dto/create-revenue_analytic.dto';
import { UpdateRevenueAnalyticDto } from './dto/update-revenue_analytic.dto';

@Injectable()
export class RevenueAnalyticsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRevenueAnalyticDto: CreateRevenueAnalyticDto) {
    return this.prismaService.revenue_analytics.create({
      data: { ...createRevenueAnalyticDto },
    });
  }

  findAll() {
    return this.prismaService.revenue_analytics.findMany();
  }

  findOne(id: number) {
    return this.prismaService.revenue_analytics.findUnique({ where: { id } });
  }

  update(id: number, updateRevenueAnalyticDto: UpdateRevenueAnalyticDto) {
    return this.prismaService.revenue_analytics.update({
      where: { id },
      data: { ...updateRevenueAnalyticDto },
    });
  }

  remove(id: number) {
    return this.prismaService.revenue_analytics.delete({ where: { id } });
  }
}
