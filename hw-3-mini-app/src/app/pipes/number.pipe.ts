import { Pipe, PipeTransform, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'number',
  pure: false
})
export class NumberPipe implements PipeTransform {
    transform(value: string | null | undefined): string {
    if (!value) return '';
    return value.replace(/\(/g, '[').replace(/\)/g, ']');
  }
}
