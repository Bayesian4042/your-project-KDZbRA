import { PartialType } from '@nestjs/mapped-types';
import { CreateRevenueAnalyticDto } from './create-revenue_analytic.dto';

export class UpdateRevenueAnalyticDto extends PartialType(
  CreateRevenueAnalyticDto,
) {}
