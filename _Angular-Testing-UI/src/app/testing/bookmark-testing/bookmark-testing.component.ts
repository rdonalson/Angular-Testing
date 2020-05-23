import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'; // <-- do not forget to import

@Component({
  selector: 'app-bookmark-testing',
  templateUrl: './bookmark-testing.component.html',
  styleUrls: ['./bookmark-testing.component.css']
})
export class BookmarkTestingComponent implements OnInit {

  constructor() {}
  ngOnInit() {}

  public scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }, wait);
    }
  }


  getThere(event: any): void {
    this.scrollToAnchor(event.target.attributes.fragment.value, 0);
  }


}

