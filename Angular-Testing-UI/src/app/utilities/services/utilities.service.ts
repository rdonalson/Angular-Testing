import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IScheduling } from '../../models/scheduling.interface';

@Injectable()
export class UtilitiesService {

  constructor() { }

  public findScheduleConflicts(current: IScheduling): boolean {


    return true;
  }

  consolidateAndTrimWhitespace(input: string): string {
    input = input.trim();
    input = input.replace(/\s+/g, ' ');
    return input;
  }

  getBase64(file: any): Observable<any> {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {
      reader.onload = function () {
        // result = reader.result;
        // console.log('reader => ' + reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    });
  }




}


/**
 *
 *   importFromExcel(ev): Observable<any> {
    let workbook;
    let excelInJSON;

    const fileReader = new FileReader();

    // init read
    fileReader.readAsArrayBuffer((<any>ev.target).files[0]);

    return Observable.create(observer => {
      // if success
      fileReader.onload = ev => {


        // Converts the excel datain to json
        workbook = XLSX.read(binary, { type: 'binary', cellDates: true, cellStyles: true });
        // only first sheet
        excelInJSON = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

        observer.next(excelInJSON);
      };

      // if failed
      fileReader.onerror = error => observer.error(error);
    });
  }


 */
