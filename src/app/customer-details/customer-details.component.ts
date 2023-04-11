import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , FormControl } from '@angular/forms';
import { CustomerService } from '../_service/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customerObject: any = {name:'v', age : 2}; // Assume customerObject is obtained from the service
  customerForm!: FormGroup;
  customerProperties!: string[];

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Create a form group with form controls for each property in the customerObject
    this.customerForm = this.formBuilder.group({});
    this.customerProperties = Object.keys(this.customerObject);
    this.customerProperties.forEach(prop => {
      this.customerForm.addControl(prop, this.formBuilder.control(this.customerObject[prop]));
    });
  }

  onSubmit() {
    // Call the update function in the service with the new customer data
    this.customerService.updateCustomer(this.customerForm.value);
  }
}
