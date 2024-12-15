import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'app',
  standalone: true
})
export class AppPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value * x;
  }

}
