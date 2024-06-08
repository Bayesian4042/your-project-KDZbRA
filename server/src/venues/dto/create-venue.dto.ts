import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: 'art hall', description: 'name of venue' })
    name: string;

    @ApiProperty({ example: '123 Business St, Business City', description: 'address of venue' })
    location: string;

    @ApiProperty({ example: '100', description: 'capacity of venue' })
    capacity: number;

    @ApiProperty({ example: '100', description: 'number of restrooms in venue' })
    amenities: string[];

    @ApiProperty({ example: '100', description: 'number of restrooms in venue' })
    accessibility: string[];

    @ApiProperty({ example: '100', description: 'number of restrooms in venue' })
    age_restriction: boolean;

    @ApiProperty({ example: '100', description: 'seat map of venue'})
    seatplan: any;
}
