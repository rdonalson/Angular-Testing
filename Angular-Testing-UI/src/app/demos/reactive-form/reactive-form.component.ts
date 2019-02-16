import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer;

  constructor() {
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  public save(): void {
    console.log(this.customerForm);
    console.log(this.customerForm.controls.firstName.invalid);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  public setValues(): void {
    this.customerForm.setValue({
      firstName: 'Bill',
      lastName: 'Johnson',
      email: 'bill.johnson@dot.com',
      sendCatalog: false
    });
  }

  public patchValues(): void {
    this.customerForm.patchValue({
      firstName: 'Andy',
      lastName: 'O\'Riley'
    });
  }
}
