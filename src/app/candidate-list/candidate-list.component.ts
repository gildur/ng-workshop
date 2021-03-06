import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../job-list/job';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate';
import { LazyLoadEvent } from 'primeng/api';
import { Page } from '../api/page';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  readonly PAGE_SIZE = 10;

  @Input()
  job: Job;

  candidates: Candidate[];
  page: Page;

  loading: boolean = true;

  filter = new FormControl('');

  @Input()
  headerTemplate;

  constructor(private readonly candidateService: CandidateService) { }

  ngOnInit() {
  }

  loadCandidates($event: LazyLoadEvent) {
    this.loading = true;
    this.candidateService.getCandidates(this.job, $event.first / this.PAGE_SIZE, this.PAGE_SIZE)
      .subscribe(response => {
        this.candidates = response._embedded['candidates'];
        this.page = response.page;
        this.loading = false;
      });
    this.filter.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      console.log(value);
    });
  }
}
