import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JobListComponent } from './job-list/job-list.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JobAddComponent } from './job-add/job-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule, InputTextareaModule, InputTextModule, MessageModule } from 'primeng/primeng';
import { JobDetailsComponent } from './job-details/job-details.component';
import { BasePathInterceptor } from './http-interceptors/base-path-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListComponent,
    CandidateListComponent,
    PageNotFoundComponent,
    HomepageComponent,
    FormatDatePipe,
    JobAddComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MenubarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    MessageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasePathInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
