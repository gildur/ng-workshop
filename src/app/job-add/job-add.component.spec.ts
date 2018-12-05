import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddComponent } from './job-add.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../job-list/job.service';
import { FormBuilder } from '@angular/forms';

describe('JobAddComponent', () => {
  let component: JobAddComponent;
  let fixture: ComponentFixture<JobAddComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const jobServiceSpy = jasmine.createSpyObj('JobService', ['addJob']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: JobService, useValue: jobServiceSpy },
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
