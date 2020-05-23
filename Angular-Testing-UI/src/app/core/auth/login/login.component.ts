import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  errorMessage: string;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }
  login() {
    // debugger;
    this.loginService.Login(this.model).subscribe(
      data => {
        // debugger;
        if (data.Status === 'Success') {
          this.router.navigate(['/Dashboard']);
          // debugger;
        } else {
          this.errorMessage = data.Message;
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  }

}
