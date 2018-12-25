import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import { ResetRequestComponent } from './components/passwords/reset-request/reset-request.component';
import { ResponseRequestComponent } from './components/passwords/response-request/response-request.component';
import { Profile } from 'selenium-webdriver/firefox';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'request-password-reset',
    component: ResetRequestComponent
  },
  {
    path: 'response-password-reset',
    component: ResponseRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
