import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameUppercase',
  pure: true
})
export class NameUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
