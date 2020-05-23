import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from '../../models/customer.model';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  public customer: ICustomer;

  constructor() {
    this.customer = new Customer();
   }

  ngOnInit() {

  }

  save(customerForm: NgForm) {
    console.log('customerForm.controls.firstName.touched', customerForm.controls.firstName.touched);
    console.log('customerForm.form)', customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
