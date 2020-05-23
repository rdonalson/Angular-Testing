import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amp-home',
  templateUrl: './amp-home.component.html',
  styleUrls: ['./amp-home.component.scss']
})
export class AmpHomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  constructor() { }

  ngOnInit() {
  }

}
