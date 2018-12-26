import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss={
    signup:'http://localhost:8000/api/signup',
    login:'http://localhost:8000/api/login'
  }
  constructor() { }
  handle(token){
    this.set(token);
    console.log(this.isValid());
    
  }

  set(token){
    localStorage.setItem('token',token);
  }
  get(){
    return localStorage.getItem('token');
  }
  remove(){
    localStorage.removeItem('token');
  }
/* Used to check the validity of token in iss */
  isValid(){
    const token=this.get();
    if(token){
      const payload=this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss)>-1?true:false;
      }
      

    }
  }
  /* Returning only the payload part,i.e.,second part of token */
  payload(token){
    const payload=token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
