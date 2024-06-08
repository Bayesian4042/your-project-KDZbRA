import { ApiProperty } from "@nestjs/swagger";

export class CreateRecurrenceRuleDto {

    @ApiProperty({ example: '1', description: 'id of an event' })
    event_id: number;

    @ApiProperty({ example: 'weekly', description: 'frequency of the recurrence rule' })
    frequency: string;

    @ApiProperty({ example: '1', description: 'interval of the recurrence rule' })
    interval: number;

    @ApiProperty({ example: 'Monday', description: 'day of the week' })
    week_days: string[];

    @ApiProperty({ example: '1', description: 'day of the month' })
    month_day: number;

    @ApiProperty({ example: '1', description: 'week of the month' })
    month_week: string[];

    @ApiProperty({ example: '2021-01-01', description: 'start date of the recurrence rule' })
    start_date: Date;

    @ApiProperty({ example: '2021-01-01', description: 'end date of the recurrence rule' })
    end_date: Date;
}
