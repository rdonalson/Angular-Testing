import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Customer } from '../../models/customer.model';

/**======================================================================
 * Reactive Form Class
 ======================================================================*/
@Component({
  selector: 'app-reactive-formbuilder',
  templateUrl: './reactive-formbuilder.component.html',
  styleUrls: ['./reactive-formbuilder.component.scss']
})
export class ReactiveFormbuilderComponent implements OnInit {
  /** Members */
  // Private
  private _emailPattern: string;
  private _phonePattern: string;
  // Public
  customerForm: FormGroup;
  customer: ICustomer;

  /**-----------------------------------------------------------------
   * Base Constructor
   -----------------------------------------------------------------*/
   constructor(
    private _formBuilder: FormBuilder) {
      this._emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+';
      this._phonePattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
      this.customer = new Customer();
  }

  /**-----------------------------------------------------------------
   * Initialize form
   -----------------------------------------------------------------*/
  ngOnInit(): void {
    this.constructFormData();
  }

  /**-----------------------------------------------------------------
   * Initialize Form Data Groups
   -----------------------------------------------------------------*/
   private constructFormData() {
    this.customerForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      emailGroup: this._formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(this._emailPattern)]],
        confirmEmail: ['', [Validators.required]],
      }, { validator: this.emailMatcherValidator }),
      phone: ['', [Validators.required, Validators.pattern(this._phonePattern)]],
      notification: 'email',
      rating: ['', this.ratingRangeValidator(1, 5)],
      // rating: '',
      sendCatalog: true
    });
    this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
  }

  /**-----------------------------------------------------------------
   * Save data, but only output to console and screen print
   -----------------------------------------------------------------*/
  public save(): void {
    console.log(this.customerForm);
    console.log(this.customerForm.controls.firstName.invalid);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  /**-----------------------------------------------------------------
   * Dynamically set Validators on phone field
   * -----------------------------------------------------------------
   * @param notifyVia string
   -----------------------------------------------------------------*/
  public setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators([ Validators.required, Validators.pattern(this._phonePattern) ]);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  /**-----------------------------------------------------------------
   * Custom Email Validator
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
  private emailMatcherValidator(c: AbstractControl): any {
    const emailControl = c.get('email');
    const confirmEmailControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmEmailControl.pristine) {
      return null;
    }
    if (emailControl.value === confirmEmailControl.value) {
      return null;
    }
    return { 'match': true };
  }

  /**-----------------------------------------------------------------
   * Custom Range Validator
   * -----------------------------------------------------------------
   * @param min number
   * @param max number
   -----------------------------------------------------------------*/
  public ratingRangeValidator(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} | null => {
      if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
        return {'range': true};
      }
      return null;
    };
  }
}
