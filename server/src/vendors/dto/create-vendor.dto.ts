import { ApiProperty } from '@nestjs/swagger';
import { business_type } from '@prisma/client';
import { IsInt, IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateVendorDto {
  @IsInt()
  @ApiProperty({ example: 1, description: 'The ID of the associated user' })
  user_id: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Acme Corp', description: 'Business name' })
  business_name?: string;

  @ApiProperty({ example: 'Technology', description: 'Business type' })
  business_type?: business_type;

  @IsString()
  @ApiProperty({ example: 'John Doe', description: 'Contact person name' })
  contact_person_name: string;

  @IsEmail()
  @ApiProperty({ example: 'contact@example.com', description: 'Contact email' })
  contact_email: string;

  @IsString()
  @ApiProperty({ example: '+1234567890', description: 'Contact phone' })
  contact_phone: string;

  @IsString()
  @ApiProperty({
    example: '123 Business St, Business City',
    description: 'Business address',
  })
  business_address: string;

  @IsString()
  @ApiProperty({
    example: '1234567890',
    description: 'Business registration number',
  })
  business_registration_number: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '1234567890',
    description: 'Tax identification number',
    required: false,
  })
  tax_identification_number?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Description of the business', required: false })
  description?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Services offered by the business',
    required: false,
  })
  services?: string;
}
