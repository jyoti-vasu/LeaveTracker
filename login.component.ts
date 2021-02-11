import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../login-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { LoginservService } from '../loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true;
user:LoginModel=new LoginModel();
loginform:FormGroup;
model:any={};
e:any[];
flag=false;
flag1=false;
adminLogin={email:'admin@gmail.com',password:'admin123'};
  constructor(private formBulider:FormBuilder,private r:Router,private m:LoginservService) { }

  ngOnInit() {
    this.loginform=this.formBulider.group(
      {
        'email':[this.user.email,[Validators.required,Validators.email]],
        'password':[this.user.password,[Validators.required,Validators.minLength(6),Validators.maxLength(30)]]
      }
    );
  }
  signupdata()
  {
    this.r.navigate(['signup']);
  }

  onLoginSubmit()
  {
    this.e=JSON.parse(localStorage.getItem("empData"));
    this.model=this.loginform.value;
    let myData:any={};
     for(let i=0;i<this.e.length;i++)
     {
       if(this.model.email==this.e[i].Email && this.model.password==this.e[i].userPassword)
       {
          this.flag=true;
          myData=this.e[i];
       }
       else if(this.model.email==this.adminLogin.email && this.model.password==this.adminLogin.password)
       {
         this.flag1=true;
       }
     }
     if(this.flag==true)
     {
          this.m.setData(myData);
       this.r.navigate(['applyleave']);
     }
     else if(this.flag1==true)
     {
       this.r.navigate(['summary']);
     }
     else
     {
       alert('user is not register');
       this.loginform.reset();
     }

  }


}
