import { Module } from '@nestjs/common';
import { DateFormatterService } from './date-formatter.service';

@Module({
  providers: [DateFormatterService],
  exports: [DateFormatterService]
})
export class DateFormatterModule {}
