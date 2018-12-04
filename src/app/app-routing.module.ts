import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { JobAddComponent } from './job-add/job-add.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jobs', children: [
    { path: '', component: JobListComponent },
    { path: 'add', component: JobAddComponent },
    { path: ':id', component: JobDetailsComponent },
  ]},
  { path: 'candidates', component: CandidateListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
