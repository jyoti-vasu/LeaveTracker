import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveSummaryComponent } from './leave-summary/leave-summary.component';
import { LoginservService } from './loginserv.service';
import { SignoutComponent } from './signout/signout.component';

const appRouts:Routes=[
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"applyleave",component:ApplyLeaveComponent},
  {path:"summary",component:LeaveSummaryComponent},
  {path:"signout",component:SignoutComponent},
  {path:"",redirectTo:'/login',pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ApplyLeaveComponent,
    LeaveSummaryComponent,
    SignoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRouts),

  ],
  providers: [LoginservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
