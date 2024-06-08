import { PartialType } from '@nestjs/mapped-types';
import { CreateRecurrenceRuleDto } from './create-recurrence_rule.dto';

export class UpdateRecurrenceRuleDto extends PartialType(
  CreateRecurrenceRuleDto,
) {}
