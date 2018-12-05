import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsComponent } from './job-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormatDatePipe } from '../pipes/format-date.pipe';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job-list/job.service';
import { ActivatedRouteStub } from '../testing/activated-route-stub';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;

  const activatedRouteStub = new ActivatedRouteStub();
  const jobServiceSpy = jasmine.createSpyObj('JobService', ['getJob']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDetailsComponent, FormatDatePipe ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: JobService, useValue: jobServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
