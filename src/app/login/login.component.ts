import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_service/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService , private router : Router) {}

  onSubmit() {
    const { login, password } = this.loginForm.value;
    if(!login || !password) return 
    this.authService.login(login, password).subscribe(res =>{
        if (!res) return  console.log('error')
        this.router.navigate([".." , "customers"])
    } );
  }
}
