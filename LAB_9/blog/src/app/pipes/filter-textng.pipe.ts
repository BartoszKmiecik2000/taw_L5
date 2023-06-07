import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTextng'
})
export class FilterTextngPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
