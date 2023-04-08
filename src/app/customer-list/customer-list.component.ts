import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../_model/Customer';
import { CustomerService } from '../_service/customer.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];
  menuItems!: MenuItem[];
  @ViewChild('cm') cm: any;

  constructor(private customerService: CustomerService) {
  
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });

    this.customerService.getMenuItems().subscribe(menuItems => {
      this.menuItems = menuItems;
    });

  
  }

  
  showMenu(event: MouseEvent, customer: Customer) {
    console.log(customer.number)
    this.menuItems.forEach(item => (item.routerLink = ['/customers', customer.number]));
    if (this.cm) {
      this.cm.toggle(event);
    }
  }
}
