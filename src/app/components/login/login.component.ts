import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage!: string;

  constructor(public formBuilder:FormBuilder, public loginService:LoginService,public router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginid : [''],
      username : ['',[Validators.required]],
      password : ['',[Validators.required]],
      accounttype : ['']
    })
  }

  /*
  public validate() {
	
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var canSubmit = true;
    
    if(uname.length ==0) {
    alert("Please enter username")
    return false;
    } else if (pwd.length == 0) {
    alert("Please enter password")
    return false;
    } else if (pwd.length < 6 || pwd.length > 12) {
    alert("Please enter password between 6 and 12 characters in length.")
    return false;
    } else {
      return true;
    }
  
    
    
  }
  */

  verifyLogin()
  {
    console.log(this.loginForm.value.username)
    console.log(this.loginForm.value.password)
    

    this.loginService.verifyLogin(this.loginForm.value.username,this.loginForm.value.password).subscribe((data:any) => {
      this.successMessage = 'Logged in successfull';
      this.router.navigate(['patientHome'])
    },err =>this.router.navigate(['login']))

  }
  /*this.loginService.getLoginByEmail(this.loginForm.value.username).subscribe((data:any) => {
      this.successMessage = 'Login with username '+this.loginForm.value.username+' logged in successfully';
      
    },err =>this.router.navigate(['login']) )*/

  

}
