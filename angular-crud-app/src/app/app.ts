import { Component } from '@angular/core';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerListComponent],
  template: `<app-customer-list></app-customer-list>`
})
export class App {}
