import { Component, OnInit } from '@angular/core';
import { IConsent } from '../../models/consent.interface';
import { Consent } from '../../models/consent.model';
import { SortDirection } from '../../models/common.enum';

@Component({
  selector: 'app-sort-testing',
  templateUrl: './sort-testing.component.html',
  styleUrls: ['./sort-testing.component.css']
})
export class SortTestingComponent implements OnInit {
  public consents: IConsent[] = [];

  constructor() {
    this.consents.push(new Consent(1, 'Mike', 'Johnson'));
    this.consents.push(new Consent(2, 'Bill', 'Johnson'));
    this.consents.push(new Consent(3, 'Tammy', 'Johns_on'));
    this.consents.push(new Consent(4, 'Dane', 'Johns_on'));
    this.consents.push(new Consent(5, 'Dane', 'Johns_en'));
    this.consents.push(new Consent(10, 'Mike', 'Johnson'));
    this.consents.push(new Consent(12, 'Bill', 'Johnson'));
    this.consents.push(new Consent(13, 'Tammy', 'Johns_on'));
    this.consents.push(new Consent(14, 'Dane', 'Johns_on'));
    this.consents.push(new Consent(15, 'Dane', 'Johns_en'));
  }

  ngOnInit() {
    console.log('Consents Before =>' + this.consents);
    let orderedList = this.AlphanumericSort(this.consents, 'fullName', SortDirection.Acending);
    console.log('Ordered Consents by FullName=> :' + orderedList);
    orderedList = this.NumericSort(this.consents, 'id', SortDirection.Decending);
    console.log('Ordered Consents by Id => :' + orderedList);
    orderedList = this.AlphanumericSort(this.consents, 'firstName', SortDirection.Decending);
    console.log('Ordered Consents by FirstName => :' + orderedList);
  }

  /**-----------------------------------------------------------------
   * For sorting alphanumeric fields in arrays : Enter any Array of
   * Objects and the name of the field you want to sort on and
   * whether you want an Acending or Decending sort
   * -----------------------------------------------------------------
   * @param inputArray: any[]
   * @param sortField: any
   * @param sortDirection: SortDirection
   * @returns any[]
   -----------------------------------------------------------------*/
  public AlphanumericSort(
    inputArray: any[],
    sortField: any,
    sortDirection: SortDirection
  ): any[] {
    if (sortDirection === SortDirection.Acending) {
      return inputArray.sort((a, b) => {
        if (a[sortField] && b[sortField]) {
          if (a[sortField].toString().toUpperCase() < b[sortField].toString().toUpperCase()) {
            return -1;
          } else if (a[sortField].toString().toUpperCase() > b[sortField].toString().toUpperCase()) {
            return 1;
          } return 0;
        } else {
          return 0;
        }
      });
    } else if (sortDirection === SortDirection.Decending) {
      return inputArray.sort((b, a) => {
        if (a[sortField] && b[sortField]) {
          if (a[sortField].toString().toUpperCase() < b[sortField].toString().toUpperCase()) {
            return -1;
          } else if (a[sortField].toString().toUpperCase() > b[sortField].toString().toUpperCase()) {
            return 1;
          } return 0;
        } else {
          return 0;
        }
      });
    }
  }

  /**-----------------------------------------------------------------
   * For sorting numeric fields in arrays : Enter any Array of
   * Objects and the name of the field you want to sort on and
   * whether you want an Acending or Decending sort
   * -----------------------------------------------------------------
   * @param inputArray: any[]
   * @param sortField: any
   * @param sortDirection: SortDirection
   * @returns any[]
   -----------------------------------------------------------------*/
  public NumericSort(
    inputArray: any[],
    sortField: any,
    sortDirection: SortDirection
  ): any[] {
    if (sortDirection === SortDirection.Acending) {
      return inputArray.sort((a, b) => {
        if (a[sortField] && b[sortField]) {
          if (a[sortField] < b[sortField]) {
            return -1;
          } else if (a[sortField] > b[sortField]) {
            return 1;
          } return 0;
        } else {
          return 0;
        }
      });
    } else if (sortDirection === SortDirection.Decending) {
      return inputArray.sort((b, a) => {
        if (a[sortField] && b[sortField]) {
          if (a[sortField] < b[sortField]) {
            return -1;
          } else if (a[sortField] > b[sortField]) {
            return 1;
          } return 0;
        } else {
          return 0;
        }
      });
    }
  }
}

