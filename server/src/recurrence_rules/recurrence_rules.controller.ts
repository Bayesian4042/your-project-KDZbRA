import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecurrenceRulesService } from './recurrence_rules.service';
import { CreateRecurrenceRuleDto } from './dto/create-recurrence_rule.dto';
import { UpdateRecurrenceRuleDto } from './dto/update-recurrence_rule.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('recurrence-rules')
@ApiTags('recurrence-rules')
export class RecurrenceRulesController {
  constructor(
    private readonly recurrenceRulesService: RecurrenceRulesService,
  ) {}

  @Post()
  create(@Body() createRecurrenceRuleDto: CreateRecurrenceRuleDto) {
    return this.recurrenceRulesService.create(createRecurrenceRuleDto);
  }

  @Get()
  findAll() {
    return this.recurrenceRulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recurrenceRulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecurrenceRuleDto: UpdateRecurrenceRuleDto,
  ) {
    return this.recurrenceRulesService.update(+id, updateRecurrenceRuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recurrenceRulesService.remove(+id);
  }
}
