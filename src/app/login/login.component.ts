import { Component, OnInit } from '@angular/core';
import {LSKEY, TOKENKEY, UserData, UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedin = false;
  wrongUsercredentials = false;
  userModel: UserData;
  userList: UserData[];
  constructor(private userService: UserService) {
    this.userModel = {
      userName: '',
      password: '',
    };
    this.loggedin = false;
  }

  submitForm() {
    console.log('Form was submitted with the following data:' +
      JSON.stringify(this.userModel));
    this.userService.validateUserCredentials(this.userModel.userName,
      this.userModel.password).subscribe((response) => {
      console.log('credentials are valid is : ' + response);
      if (response) {
        this.login(response);
      } else {
        this.loggedin = false;
        this.wrongUsercredentials = true;
      }
    });
  }

  logoutForm() {
    console.log('logout called');
    this.logout();
  }

  login (token) {
    localStorage.setItem(LSKEY, this.userModel.userName);
    console.log('ssaving tokany ' + token);
    localStorage.setItem(TOKENKEY, token);
    console.log(localStorage);
    this.loggedin = true;
  }

  logout () {
    console.log(localStorage);
    if (localStorage.getItem(LSKEY)) {
      localStorage.removeItem(LSKEY);
      this.loggedin = false;
    }
  }
  ngOnInit() {

  }

}
