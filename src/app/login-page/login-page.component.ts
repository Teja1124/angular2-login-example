import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})

export class LoginPageComponent {

  data: any = {};
  constructor (private _router: Router){}

  formSubmit() {
    console.log(this.data);
      if (this.data.username == "admin" && this.data.password == "admin") {
        this._router.navigate(['./adminarea']);
      }
    }
}
