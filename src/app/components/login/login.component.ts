import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
