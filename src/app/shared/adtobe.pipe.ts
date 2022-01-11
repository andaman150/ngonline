import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adtobe'
})
export class AdtobePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const monthName = ['ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'];
    const date = new Date(value);
    return `${date.getDate()} ${monthName[date.getMonth()]} ${date.getFullYear()+543}`;
  }

}
