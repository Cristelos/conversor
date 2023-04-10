import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {

  transform(value: any[], nombreMoneda: string): unknown {
    if(nombreMoneda === '' || nombreMoneda === undefined){
      return value;
    }
    return value.filter(monedas => monedas.rate.indexOf(nombreMoneda) != -1)
  }

}
