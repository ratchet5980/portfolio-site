import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'prc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  readonly loginButtonText = "Login";
  password: string = '';
  userName: string = '';
  emptyPassword: boolean = false;
  emptyUserName: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.validateInput();
  }
  private validateInput(){
    this.emptyPassword = !this.password;
    this.emptyUserName = !this.userName;
  }
}
