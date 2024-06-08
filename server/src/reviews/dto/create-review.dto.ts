import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsOptional } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  @ApiProperty({ example: 1, description: 'The ID of the buyer' })
  buyer_id: number;

  @IsInt()
  @ApiProperty({ example: 1, description: 'The ID of the vendor' })
  vendor_id: number;

  @IsInt()
  @ApiProperty({ example: 5, description: 'Rating given by the buyer' })
  rating: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Review text', required: false })
  review?: string;
}
