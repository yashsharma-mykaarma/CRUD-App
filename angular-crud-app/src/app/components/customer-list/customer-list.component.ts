import { afterNextRender, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = signal<Customer[]>([]);

  customer: Customer = { name: '', email: '' };

  isEditMode = false;
  editId: number | null = null;

  constructor(private customerService: CustomerService) {
    afterNextRender(() => {
      this.loadCustomers();
    });
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.dataSource.set(data);
    });
  }

  saveCustomer(): void {
    if (this.isEditMode && this.editId !== null) {
      this.customerService.updateCustomer(this.editId, this.customer)
        .subscribe(() => {
          this.resetForm();
          this.loadCustomers();
        });
    } else {
      this.customerService.addCustomer(this.customer)
        .subscribe(() => {
          this.resetForm();
          this.loadCustomers();
        });
    }
  }

  editCustomer(customer: Customer): void {
    this.customer = { name: customer.name, email: customer.email };
    this.editId = customer.id!;
    this.isEditMode = true;
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id)
      .subscribe(() => this.loadCustomers());
  }

  resetForm(): void {
    this.customer = { name: '', email: '' };
    this.isEditMode = false;
    this.editId = null;
  }
}
