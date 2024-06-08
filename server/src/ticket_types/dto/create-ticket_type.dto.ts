import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketTypeDto {

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: 'General Admission', description: 'name of the ticket type' })
    ticket_type_name: string;

    @ApiProperty({ example: '50.00', description: 'price of the ticket type' })
    price: number;

    @ApiProperty({ example: '100', description: 'quantity available of the ticket type' })
    quantity_available: number;
}
