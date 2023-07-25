import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class DateFormatterService {

  formatDateToCalendarDate(date: any) {
    return moment(date).calendar({
      sameDay: '[Today] - HH.mm a',
      sameElse: 'DD MMM, YYYY - HH.mm a',
      lastWeek: 'DD MMM, YYYY - HH.mm a',
    });
  }
}
