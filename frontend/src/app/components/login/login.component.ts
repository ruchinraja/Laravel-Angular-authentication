import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  form={
    email : null,
    password : null
  };
  public error=null;
  constructor(private http: HttpClient,
    private token:TokenService,
    private router:Router,
    private Auth:AuthService
    ) { }

  onSubmit(){
    return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

  }

  handleError(error){
    this.error=error.error.error;

  }

  ngOnInit() {
  }

}
