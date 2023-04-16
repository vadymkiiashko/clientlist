import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../_model/Customer';
import { CustomerService } from '../_service/customer.service';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../_service/search.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {
  customers!: Customer[];
  menuItems!: MenuItem[];
  searchForm !: FormGroup;
  @ViewChild('cm') cm: any;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private searchService: SearchService
  ) {

    this.searchForm = this.fb.group({
      country: '',
      city: '',
      turnover: '',
    });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });

    this.customerService.getMenuItems().subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }

  showMenu(event: MouseEvent, customer: Customer) {
    console.log(customer.number);
    this.menuItems.forEach((item) => (item.routerLink = ['home']));
    if (this.cm) {
      this.cm.toggle(event);
    }
  }

  onMenuItemClick(item: any, event: MouseEvent) {
    console.log('Clicked menu item:', item);
    console.log('Click event:', event);
    // do something with item and event variables
  }

  search() {
    const searchParams = {
      country : this.searchForm.get('country')?.value || "",
      city: this.searchForm.get('city')?.value || "",
      turnover: this.searchForm.get('turnover')?.value || "",
    };
    console.log(this.searchService.search(searchParams));
  }

  reset() {
    this.searchForm = this.fb.group({
      country: '',
      city: '',
      turnover: '',
    });
  }


}
