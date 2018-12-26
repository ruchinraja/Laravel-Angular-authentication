import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    email:null,
    name:null,
    password:null,
    confirm_password:null

  };
  public error=[];
  constructor(private http: HttpClient,private token:TokenService,private router:Router) { }
  onSubmit(){
    return this.http.post('http://localhost:8000/api/signup',this.form).subscribe(
      data => this.handleResponse(data),
      error =>this.handleError(error)


    );

  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/login');

  }



  handleError(error){
    this.error=error.error.errors;

  }

  ngOnInit() {
  }

}
