import { ApiProperty } from '@nestjs/swagger';
import { payment_method } from '@prisma/client';
import { IsInt, IsDecimal, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsInt()
  @ApiProperty({ example: 1, description: 'The ID of the associated ticket' })
  ticket_id: number;

  @IsDecimal()
  @ApiProperty({ example: 50.0, description: 'Amount of the payment' })
  amount: number;

  @IsString()
  @ApiProperty({ example: 'USD', description: 'Currency of the payment' })
  currency: string;

  @IsString()
  @ApiProperty({ example: 'Credit Card', description: 'Method of payment' })
  method: payment_method;

  @IsString()
  @ApiProperty({ example: 'pending', description: 'Status of the payment' })
  status: string;
}
