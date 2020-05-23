import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Customer } from '../../models/customer.model';

/**======================================================================
 * Reactive Form Custom Display Validation Class
 ======================================================================*/
@Component({
  selector: 'app-reactive-display-validation',
  templateUrl: './reactive-display-validation.component.html',
  styleUrls: ['./reactive-display-validation.component.scss']
})
export class ReactiveDisplayValidationComponent implements OnInit {
  /** Members */
  // Private
  private _emailPattern: string;
  private _phonePattern: string;

  private _firstNameValidationMessages = {
    required: 'Please enter your first name.',
    minlength: 'First Name must be at least 3 characters.'
  };
  private _lastNameValidationMessages = {
    required: 'Please enter your last name.',
    maxlength: 'Last Name cannot be more than 30 characters.'
  };
  private _emailValidationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };
  private _confirmEmailValidationMessages = {
    required: 'Please confirm your email address.'
  };
  private _emailGroupValidationMessages = {
    nomatch: 'The confirmation does not match the email address.'
  };
  private _phoneValidationMessages = {
    required: 'Please enter your phone #.',
    pattern: 'Please enter a valid phone number.'
  };
  private _ratingValidationMessages = {
    range: 'Please rate your experience from 1 to 5.'
  };

  // Public
  public customerForm: FormGroup;
  public customer: ICustomer;
  public firstNameMessage: string;
  public lastNameMessage: string;
  public emailMessage: string;
  public confirmEmailMessage: string;
  public emailGroupMessage: string;
  public phoneMessage: string;
  public ratingMessage: string;

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
    this.initializeFormDataStructures();
    this.initializeFieldChangeMonitors();
  }

  /**-----------------------------------------------------------------
   * Set-up the Form Builder Data Structures & Validators.
   -----------------------------------------------------------------*/
  private initializeFormDataStructures() {
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
      sendCatalog: true
    });
  }

  /**-----------------------------------------------------------------
   * Set-up the watchers for changes in the field values.
   -----------------------------------------------------------------*/
  private initializeFieldChangeMonitors() {
    // First Name
    const firstNameControl = this.customerForm.get('firstName');
    firstNameControl.valueChanges.debounceTime(1000).subscribe(value => this.setFirstNameMessage(firstNameControl));
    // Last Name
    const lastNameControl = this.customerForm.get('lastName');
    lastNameControl.valueChanges.debounceTime(1000).subscribe(value => this.setLastNameMessage(lastNameControl));
    // Email Group
    const groupEmailControl = this.customerForm.get('emailGroup');
    groupEmailControl.valueChanges.debounceTime(1000).subscribe(value => this.setEmailGroupMessage(groupEmailControl));
    // Phone
    const phoneControl = this.customerForm.get('phone');
    phoneControl.valueChanges.debounceTime(1000).subscribe(value => this.setPhoneMessage(phoneControl));
    // Notification Method
    this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));
    // Rating
    const ratingControl = this.customerForm.get('rating');
    ratingControl.valueChanges.debounceTime(1000).subscribe(value => this.setRatingMessage(ratingControl));
  }

  /**-----------------------------------------------------------------
   * Set the First Name Error Message
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
  private setFirstNameMessage(c: AbstractControl): void {
    this.firstNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.firstNameMessage = Object.keys(c.errors).map(key =>
        this._firstNameValidationMessages[key]).join(' ');
    }
  }
  /**-----------------------------------------------------------------
   * Set the Last Name Error Message
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
  private setLastNameMessage(c: AbstractControl): void {
    this.lastNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.lastNameMessage = Object.keys(c.errors).map(key =>
        this._lastNameValidationMessages[key]).join(' ');
    }
  }

  /**-----------------------------------------------------------------
   * Set the Group Email Error Message
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
  private setEmailGroupMessage(c: AbstractControl): void {
    const emailControl = c.get('email');
    const confirmEmailControl = c.get('confirmEmail');
    this.emailMessage = '';
    this.confirmEmailMessage = '';
    this.emailGroupMessage = '';

    if ((emailControl.touched || emailControl.dirty) && emailControl.errors) {
      this.emailMessage = Object.keys(emailControl.errors).map(key =>
        this._emailValidationMessages[key]).join(' ');
    }

    if ((confirmEmailControl.touched || confirmEmailControl.dirty) && confirmEmailControl.errors) {
      this.confirmEmailMessage = Object.keys(confirmEmailControl.errors).map(key =>
        this._confirmEmailValidationMessages[key]).join(' ');
    }

    if (!emailControl.errors && !confirmEmailControl.errors && c.errors) {
      this.emailGroupMessage = Object.keys(c.errors).map(key =>
        this._emailGroupValidationMessages[key]).join(' ');
    }
  }

  /**-----------------------------------------------------------------
   * Set the Phone Error Messages
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
  private setPhoneMessage(c: AbstractControl): void {
    this.phoneMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.phoneMessage = Object.keys(c.errors).map(key =>
        this._phoneValidationMessages[key]).join(' ');
    }
  }

  /**-----------------------------------------------------------------
   * Set the Rating Error Messages
   * -----------------------------------------------------------------
   * @param c AbstractControl
   -----------------------------------------------------------------*/
   private setRatingMessage(c: AbstractControl): void {
    this.ratingMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.ratingMessage = Object.keys(c.errors).map(key =>
        this._ratingValidationMessages[key]).join(' ');
    }
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
    return { 'nomatch': true };
  }

  /**-----------------------------------------------------------------
   * Dynamically set Validators on phone field
   * -----------------------------------------------------------------
   * @param notifyVia string
   -----------------------------------------------------------------*/
  public setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators([Validators.required, Validators.pattern(this._phonePattern)]);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  /**-----------------------------------------------------------------
   * Custom Range Validator
   * -----------------------------------------------------------------
   * @param min number
   * @param max number
   -----------------------------------------------------------------*/
  public ratingRangeValidator(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
        return { 'range': true };
      }
      return null;
    };
  }
}


