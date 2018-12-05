import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListComponent } from './job-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from './job.service';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import { EMPTY } from 'rxjs';

describe('JobListComponent', () => {
  let component: JobListComponent;
  let fixture: ComponentFixture<JobListComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const jobServiceSpy = jasmine.createSpyObj('JobService', ['getJobs']);
  jobServiceSpy.getJobs.and.returnValue(EMPTY);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListComponent, FormatDatePipe ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: JobService, useValue: jobServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
