import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {
  FormGroup,
  FormControlName,
  FormBuilder,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ActivatedRoute, Router } from '@angular/router';

import { GenericValidator } from '../../shared/validators/generic.validator';
import { IProduct } from '../models/product.interface';
import { NumberValidators } from '../../shared/validators/number.validator';
import { ProductService } from '../../services/product/data/product.service';

/**====================================================================================
 * Edit Component Page
 ====================================================================================*/
@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {
  //#region "Class Variables"
  // Private
  private _validationMessages: { [key: string]: { [key: string]: string } };
  private _genericValidator: GenericValidator;
  private _sub: Subscription;
  // Public
  public pageTitle = 'Product Edit';
  public errorMessage: string;
  public productForm: FormGroup;
  public product: IProduct;
  // Use with the generic validation message class
  public displayMessage: { [key: string]: string } = {};
  // Children
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  // Properties
  get tags(): FormArray {
    return <FormArray>this.productForm.get('tags');
  }
  //#endregion "Class Variables"

  /**------------------------------------------------------------------------------------
   * Base Constructor
   * ------------------------------------------------------------------------------------
   * @param _formBuilder
   * @param _route
   * @param _router
   * @param _productService
   ------------------------------------------------------------------------------------*/
  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this._validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this._genericValidator = new GenericValidator(this._validationMessages);
  }

  //#region "Life Cycle Events"
  /**------------------------------------------------------------------------------------
   * On Init
   ------------------------------------------------------------------------------------*/
  public ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      tags: this._formBuilder.array([]),
      description: ''
    });

    // Read the product Id from the route parameter
    this._sub = this._route.params.subscribe(params => {
      const id = +params['id'];
      this.getProduct(id);
    });
  }

  /**------------------------------------------------------------------------------------
   * On Destroy
   ------------------------------------------------------------------------------------*/
  public ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  /**------------------------------------------------------------------------------------
   * After View Init
   ------------------------------------------------------------------------------------*/
  public ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    merge(this.productForm.valueChanges, ...controlBlurs)
      .debounceTime(800)
      .subscribe(value => {
        this.displayMessage = this._genericValidator.processMessages(
          this.productForm
        );
      });
  }
  //#endregion "Life Cycle Events"

  //#region "Events"
  /**------------------------------------------------------------------------------------
   * Insert another tag group to the page
   ------------------------------------------------------------------------------------*/
  public addTag(): void {
    this.tags.push(new FormControl());
  }

  /**------------------------------------------------------------------------------------
   * Delete a tag group from the page
   * ------------------------------------------------------------------------------------
   * @param index
   ------------------------------------------------------------------------------------*/
  public deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }
  //#endregion "Events"

  //#region "Utilities"
  /**------------------------------------------------------------------------------------
   * Operation to be completed after record is saved
   ------------------------------------------------------------------------------------*/
  private onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this._router.navigate(['../../../../product-list/product-list'], {
      relativeTo: this._route
    });
  }

  /**------------------------------------------------------------------------------------
   * Record & Page configuration to be completed after record is retieved from API
   * ------------------------------------------------------------------------------------
   * @param product
   ------------------------------------------------------------------------------------*/
  private displayProduct(product: IProduct): void {
    if (this.productForm) {
      this.productForm.reset();
    }
    this.product = product;

    if (this.product.id === 0) {
      this.pageTitle = 'Add Product';
    } else {
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }
    // Update the data on the form
    this.productForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      starRating: this.product.starRating,
      description: this.product.description
    });
    this.productForm.setControl(
      'tags',
      this._formBuilder.array(this.product.tags || [])
    );
  }
  //#endregion "Utilities"

  //#region "Data Reads"
  /**------------------------------------------------------------------------------------
   * Gets a specific record for display or editing
   * ------------------------------------------------------------------------------------
   * @param id
   ------------------------------------------------------------------------------------*/
  private getProduct(id: number): void {
    this._productService.getProduct(id).subscribe(
      (product: IProduct) => {
        this.displayProduct(product);
      },
      (error: any) => (this.errorMessage = <any>error)
    );
  }
  //#endregion "Data Reads"

  //#region "Data Writes"
  public deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this._productService
          .deleteProduct(this.product.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => (this.errorMessage = <any>error)
          );
      }
    }
  }

  /**------------------------------------------------------------------------------------
   * Save or Insert a record
   ------------------------------------------------------------------------------------*/
  public saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === 0) {
          this._productService
            .createProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
            );
        } else {
          this._productService
            .updateProduct(p)
            .subscribe(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  //#endregion "Data Writes"
}
