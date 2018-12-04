import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JobService } from '../job-list/job.service';

export function uniqueValidator(jobService: JobService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap(() =>
        jobService.getJobs().pipe(
          map(jobs => jobs.map(job => job.code).find(code => code === control.value)))),
      map(taken => taken ? { taken: true } : null));
  };
}
