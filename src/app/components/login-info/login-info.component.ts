import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
  logins: Login[] = [];
  public errorMessage!:string;

  constructor(public loginService: LoginService) {
    this.loginService.getLogins().subscribe((data:any) => {
      this.logins = data;
   })
  }

  ngOnInit(): void {
  }

}
