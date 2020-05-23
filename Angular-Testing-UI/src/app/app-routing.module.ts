import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'app/core/auth/login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'Dasboard',
    component: AppComponent,
    data: {
      title: 'Dashboard Page'
    }
  },
  {
    path: 'app/core/auth/register',
    component: RegisterComponent,
    data: {
      title: 'Add User Page'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
