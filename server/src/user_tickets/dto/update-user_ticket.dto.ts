import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTicketDto } from './create-user_ticket.dto';

export class UpdateUserTicketDto extends PartialType(CreateUserTicketDto) {}
