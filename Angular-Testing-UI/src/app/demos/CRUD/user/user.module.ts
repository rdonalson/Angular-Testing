import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth/data/auth.service';
import { AuthGuardService } from '../services/auth/guard/auth-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../AMP/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'demos/demo-home/crud-home/login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class UserModule { }
