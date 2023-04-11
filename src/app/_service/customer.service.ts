import { Injectable } from '@angular/core';
import { Customer } from '../_model/Customer';
import { Observable, of } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of([
      { id: 1, name: 'John Doe', number: '001', country: 'USA', city: 'New York' },
      { id: 2, name: 'Jane Smith', number: '002', country: 'Canada', city: 'Toronto' },
      { id: 3, name: 'Bob Johnson', number: '003', country: 'Australia', city: 'Sydney' },
      { id: 4, name: 'Alice Brown', number: '004', country: 'UK', city: 'London' },
    ]);
  }

  getMenuItems(): Observable<MenuItem[]> {
    return of([
      { label: 'Edit', icon: 'pi pi-pencil', routerLink: ['../','customers'] },
      { label: 'Delete', icon: 'pi pi-trash', routerLink: [] },
      { label: 'Details', icon: 'pi pi-info-circle', routerLink: [] },
    ]);
  }

  updateCustomer(customer : any) {
    console.log(customer)
  }
}