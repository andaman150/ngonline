import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb : FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(
      (token)=>{
        console.log(token);

      }
    );
  }

}
