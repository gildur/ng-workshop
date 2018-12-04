import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'ng-workshop', icon: 'pi pi-home', routerLink: '/'},
      {label: 'Jobs', icon: 'pi pi-briefcase', routerLink: '/jobs'},
      {label: 'Candidates', icon: 'pi pi-user', routerLink: '/candidates'}
    ];
  }
}
