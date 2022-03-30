import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(4)]]
    })
  }

  displayLoginInfo()
  {
    console.log(this.loginForm.value)
    this.loginService.saveLogin(this.loginForm.value).subscribe((data:any) => {
      this.successMessage = 'Login with login id '+this.loginForm.value.loginid+' saved successfully';
      
    },err =>this.router.navigate(['loginInfo']) )
  }

}
