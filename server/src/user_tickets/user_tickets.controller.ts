import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserTicketsService } from './user_tickets.service';
import { CreateUserTicketDto } from './dto/create-user_ticket.dto';
import { UpdateUserTicketDto } from './dto/update-user_ticket.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-tickets')
@ApiTags('user-tickets')
export class UserTicketsController {
  constructor(private readonly userTicketsService: UserTicketsService) {}

  @Post()
  create(@Body() createUserTicketDto: CreateUserTicketDto) {
    return this.userTicketsService.create(createUserTicketDto);
  }

  @Get()
  findAll() {
    return this.userTicketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTicketsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserTicketDto: UpdateUserTicketDto,
  ) {
    return this.userTicketsService.update(+id, updateUserTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTicketsService.remove(+id);
  }
}
