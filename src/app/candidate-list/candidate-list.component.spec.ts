import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListComponent } from './candidate-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CandidateService } from './candidate.service';

describe('CandidateListComponent', () => {
  let component: CandidateListComponent;
  let fixture: ComponentFixture<CandidateListComponent>;

  const candidateServiceSpy = jasmine.createSpyObj('CandidateService', ['getCandidates']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListComponent ],
      providers: [
        { provide: CandidateService, useValue: candidateServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
