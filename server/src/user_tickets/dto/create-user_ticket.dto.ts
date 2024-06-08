import { ApiProperty } from "@nestjs/swagger";

export class CreateUserTicketDto {

    @ApiProperty({ example: '1', description: 'id of a buyer' })
    buyer_id: number;

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: '1', description: 'id of a ticket type' })
    ticket_type_id: number;

    @ApiProperty({ example: '1', description: 'id of a payment' })
    payment_id: number;

    @ApiProperty({ example: '1', description: 'id of a ticket status' })
    ticket_status: string;

    @ApiProperty({ example: '123456', description: 'confirmation code of the ticket' })
    confirmation_code: string;

    @ApiProperty({ example: 'https://www.example.com/qr_code', description: 'url of the qr code' })
    qr_code_url: string;

    @ApiProperty({ example: '2021-01-01', description: 'purchase date of the ticket' })
    purchase_date: Date;
}
