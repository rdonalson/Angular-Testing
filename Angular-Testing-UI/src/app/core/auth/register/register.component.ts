import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Register } from '../../models/register.model';
import { LoginService } from 'src/app/shared/services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  data = false;
  employeeForm: any;
  massage: string;
  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginService
  ) { }
  ngOnInit() {
      this.employeeForm = this.formbuilder.group({
      UserName: ['', [Validators.required]],
      LoginName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      Address: ['', [Validators.required]],
    });
  }
   onFormSubmit() {
    const user = this.employeeForm.value;
    this.Createemployee(user);
  }
  Createemployee(register: Register) {
  this.loginService.CreateUser(register).subscribe(
    () => {
      this.data = true;
      this.massage = 'Data saved Successfully';
      this.employeeForm.reset();
    });
  }

}
