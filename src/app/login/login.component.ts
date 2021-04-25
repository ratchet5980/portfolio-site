import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  readonly loginButtonText = "Login";

  constructor() { }

  ngOnInit(): void {
  }

}
