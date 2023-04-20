import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import  {ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string
  password: string
  email: string
  constructor(private _api: AuthService, private router: Router) {}

  signup() {
    console.log(this.username)
    console.log(this.password)
    console.log(this.email)
    this._api.register({
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe(e => {
      if (e.status === 201) {
        this._api.setToken(e.data.token)
        this.router.navigateByUrl('/home')
      }
    })
  }
}
