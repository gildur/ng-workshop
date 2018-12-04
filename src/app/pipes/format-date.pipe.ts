import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe extends DatePipe {

  transform(value: any): string | null {
    return super.transform(value, 'MM/dd/yy');
  }
}
