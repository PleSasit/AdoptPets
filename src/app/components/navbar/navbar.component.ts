import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  _api : AuthService
  public totalItem : number = 0;
  constructor(private api:AuthService){
    this._api = api
  }


}
