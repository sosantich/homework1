import { Pipe, PipeTransform, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Pipe({
  name: 'ageIncrement',
  pure: false
})
export class AgeIncrementPipe implements PipeTransform {
    transform(age: number): number {
        return age+1000;
    }


}
