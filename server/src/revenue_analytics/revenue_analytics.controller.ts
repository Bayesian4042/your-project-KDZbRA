import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RevenueAnalyticsService } from './revenue_analytics.service';
import { CreateRevenueAnalyticDto } from './dto/create-revenue_analytic.dto';
import { UpdateRevenueAnalyticDto } from './dto/update-revenue_analytic.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('revenue-analytics')
@ApiTags('revenue-analytics')
export class RevenueAnalyticsController {
  constructor(
    private readonly revenueAnalyticsService: RevenueAnalyticsService,
  ) {}

  @Post()
  create(@Body() createRevenueAnalyticDto: CreateRevenueAnalyticDto) {
    return this.revenueAnalyticsService.create(createRevenueAnalyticDto);
  }

  @Get()
  findAll() {
    return this.revenueAnalyticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueAnalyticsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRevenueAnalyticDto: UpdateRevenueAnalyticDto,
  ) {
    return this.revenueAnalyticsService.update(+id, updateRevenueAnalyticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueAnalyticsService.remove(+id);
  }
}
