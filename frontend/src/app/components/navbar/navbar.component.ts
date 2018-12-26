import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn :boolean;
  constructor(private Auth:AuthService,private router:Router,private token:TokenService) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);

  }
  logout(event:MouseEvent){
    this.token.remove();
    this.Auth.changeAuthStatus(false);
   
    this.router.navigateByUrl('/login');
  }

}
