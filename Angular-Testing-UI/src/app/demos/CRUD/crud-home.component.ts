import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { AuthService } from './services/auth/data/auth.service';
import { MessageService } from './services/messages/message.service';

@Component({
  selector: 'app-crud-home',
  templateUrl: './crud-home.component.html',
  styleUrls: ['./crud-home.component.scss']
})
export class CrudHomeComponent {
  public pageTitle = 'Welcome';


  loading = true;

  constructor(
    public authService: AuthService,
    public messageService: MessageService,
              private router: Router
  ) {

      router.events.subscribe((routerEvent: any) => {
          this.checkRouterEvent(routerEvent);
      });
  }

  checkRouterEvent(routerEvent: Event): void {
      if (routerEvent instanceof NavigationStart) {
          this.loading = true;
      }

      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.loading = false;
      }
  }

  displayMessages(): void {
      // Example of primary and secondary routing together
      // this.router.navigate(['/login', {outlets: { popup: ['messages']}}]); // Does not work
      // this.router.navigate([{outlets: { primary: ['login'], popup: ['messages']}}]); // Works
      this.router.navigate([{outlets: { popup: ['messages']}}]); // Works
      this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
      this.router.navigate([{ outlets: { popup: null } }]);
      this.messageService.isDisplayed = false;
  }

  logOut(): void {
      this.authService.logout();
      this.router.navigateByUrl('/welcome');
  }

}
