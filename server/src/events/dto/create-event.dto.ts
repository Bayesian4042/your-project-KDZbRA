import { ApiProperty } from '@nestjs/swagger';
import { event_format, event_type } from '@prisma/client';
import { IsInt, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateEventDto {
  @IsInt()
  @ApiProperty({ example: 1, description: 'ID of the event' })
  @IsOptional()
  vendor_id: number;
 
  @IsString()
  @ApiProperty({ example: 'Tech Conference', description: 'Name of the event' })
  name: string;

  @IsString()
  @ApiProperty({ description: 'Description of the event', required: true })
  description: string;

  @IsString()
  @ApiProperty({ example: 'Conference', description: 'Type of the event' })
  event_type: event_type;

  @ApiProperty({
    example: 'Online',
    description: 'Format of the event',
    required: true,
  })
  event_format: event_format;

  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Whether the event is recurring',
  })
  recurring: boolean;
}
