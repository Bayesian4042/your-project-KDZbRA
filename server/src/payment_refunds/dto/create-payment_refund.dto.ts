import { ApiProperty } from "@nestjs/swagger";
import { payment_method } from "@prisma/client";

export class CreatePaymentRefundDto {
    @ApiProperty({ example: '1', description: 'id of a user' })
    user_id: number;

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: '10', description: 'amount to be refund' })
    amount: number;

    @ApiProperty({ example: 'paypal', description: 'method of refund' })
    method: payment_method;

    @ApiProperty({ example: 'pending', description: 'status of refund' })
    status: string;
}
