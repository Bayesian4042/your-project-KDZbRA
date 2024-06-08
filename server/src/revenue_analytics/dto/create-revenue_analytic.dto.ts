import { ApiProperty } from "@nestjs/swagger";

export class CreateRevenueAnalyticDto {

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: '2021-01-01', description: 'date of the revenue analytic' })
    total_revenue: number;

    @ApiProperty({ example: '1', description: 'number of tickets sold' })
    total_tickets_sold: number;
}
