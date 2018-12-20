import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-home',
  templateUrl: './crud-home.component.html',
  styleUrls: ['./crud-home.component.scss']
})
export class CrudHomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  constructor() { }

  ngOnInit() {
  }

}
