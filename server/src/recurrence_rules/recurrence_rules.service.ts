import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateRecurrenceRuleDto } from './dto/create-recurrence_rule.dto';
import { UpdateRecurrenceRuleDto } from './dto/update-recurrence_rule.dto';

@Injectable()
export class RecurrenceRulesService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createRecurrenceRuleDto: CreateRecurrenceRuleDto) {
    return this.prismaService.recurrence_rules.create({
      data: { ...createRecurrenceRuleDto },
    });
  }

  findAll() {
    return this.prismaService.recurrence_rules.findMany();
  }

  findOne(id: number) {
    return this.prismaService.recurrence_rules.findUnique({ where: { id } });
  }

  update(id: number, updateRecurrenceRuleDto: UpdateRecurrenceRuleDto) {
    return this.prismaService.recurrence_rules.update({
      where: { id },
      data: { ...updateRecurrenceRuleDto },
    });
  }

  remove(id: number) {
    return this.prismaService.recurrence_rules.delete({ where: { id } });
  }
}
