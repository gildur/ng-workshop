import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../job-list/job';
import { CandidateService } from './candidate.service';
import { Candidate } from './candidate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {

  @Input()
  job: Job;

  candidates: Candidate[];

  constructor(private readonly candidateService: CandidateService) { }

  ngOnInit() {
    this.candidateService.getCandidates(this.job).subscribe(candidates => this.candidates = candidates);
  }
}
