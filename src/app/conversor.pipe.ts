import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return "";
    return value.toLowerCase();
  }

}
