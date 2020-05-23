import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

type AOA = any[][];
@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})
export class ExportCsvComponent implements OnInit {

  data2 = [
    {
      'patientName': 'Bobb, Martha',
      'accountNo': '33690',
      'guarantor': ' Martha Bobb',
      'patientId': 3689,
      'accountBalance': 750,
      'patientBalance': 750,
      'organizationId': 3
    },
    {
      'patientName': 'Hutton, Jonathan',
      'accountNo': '142',
      'guarantor': ' Joana Hutton',
      'patientId': 15129,
      'accountBalance': 0,
      'patientBalance': 0,
      'organizationId': 3
    },
    {
      'patientName': 'iiiii, ii',
      'accountNo': '12345678912365',
      'guarantor': ' ii iiiii',
      'patientId': 15222,
      'accountBalance': 60,
      'patientBalance': 60,
      'organizationId': 3
    },
    {
      'patientName': 'Kilmister, Ian F',
      'accountNo': '121',
      'guarantor': ' Jolana Kilmister',
      'patientId': 15108,
      'accountBalance': 0,
      'patientBalance': 0,
      'organizationId': 3
    },
    {
      'patientName': 'T43, T43',
      'accountNo': '12345678912377',
      'guarantor': ' T43 T43',
      'patientId': 15234,
      'accountBalance': 10000,
      'patientBalance': 10000,
      'organizationId': 3
    },
    {
      'patientName': 'TT, Test case 01',
      'accountNo': '207',
      'guarantor': ' Test case 01 TT',
      'patientId': 15194,
      'accountBalance': 450,
      'patientBalance': 450,
      'organizationId': 3
    }
  ];

  // wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  // fileName = 'SheetJS.xlsx';
  wopts: XLSX.WritingOptions = { bookType: 'csv', type: 'array' };
  fileName = 'SheetJS.csv';

  constructor() { }

  ngOnInit() {

  }


  // const workbook wb = {
  //   SheetNames: ['Sheet1'],
  //   Sheets: {
  //     Sheet1: {
  //       '!ref': 'A1:C1',
  //       A1: { t: 'n', v: 10000 },                    // <-- General format
  //       B1: { t: 'n', v: 10000, z: '0%' },           // <-- Builtin format
  //       C1: { t: 'n', v: 10000, z: '"T"\ #0.00' }  // <-- Custom format
  //     }
  //   }
  // };



  export(): void {


    /* generate worksheet */
    // const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data2);

    ws['B2'] = { t: 'n', z: '"T"\ #0.00' };

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

}
//   data: AOA = [ [1, 2], [3, 4] ];
// private _csvService: CsvService
// export2(): void {
//   this._csvService.download(this.data2, 'Filename');
// }
// public exportAsExcelFile(json: any[], excelFileName: string): void {
//   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
//   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
//   this.saveAsExcelFile(excelBuffer, excelFileName);
//   }
// private saveAsExcelFile(buffer: any, fileName: string): void {
//   const data: Blob = new Blob([buffer], {
//     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,'
//   });
//   const today = new Date();
//   const date = today.getFullYear() + '' + (today.getMonth() + 1) + '' + today.getDate() + '_';
//   const time = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds();
//   const name = fileName + date + time;
//   FileSaver.saveAs(data, name + '.csv');
//   }
