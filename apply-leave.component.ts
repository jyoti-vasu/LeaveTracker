import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { LoginservService } from '../loginserv.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

model:any={};
leaveform:FormGroup;
e:any[]=[]
employee:any[]=[];
model2:any={};
username:any;
status='Not Approve';
isEdit=false;
isupdate=true;
model4:any={};
model5:any={};
  constructor(private m:LoginservService) { 
     this.model2=this.m.getData();
     this.username=this.model2.username;
  }

  ngOnInit() {
    this.e=JSON.parse(localStorage.getItem("applayData"));
    this.leaveform=new FormGroup({
      fromdate:new FormControl(['',Validators.required]),
      todate:new FormControl(['',Validators.required])
    });
    if(this.e!=null)
    {
      let j=0;
      for(let i=0;i<this.e.length;i++)
      {
        if(this.e[i].username==this.username)
        {
          this.employee[j]=this.e[i];
          j++;
        }
        
        if(this.e[i].status!='Not Approve')
        {
          this.isEdit=true;
        }
        else
        {
          this.isEdit=false;
        }
      }
    }
    
  }


  addData()
  {
      this.model=this.leaveform.value;
      this.model.username=this.username;
      this.model.status=this.status;
      let emp=JSON.parse(localStorage.getItem("applayData"));
      if(emp==null)
      {
        emp=[];
      }
      emp.push(this.model);
      localStorage.setItem("applayData",JSON.stringify(emp));
      this.e=JSON.parse(localStorage.getItem("applayData"));
      let j=0;
      for(let i=0;i<this.e.length;i++)
      {
        if(this.e[i].username==this.username)
        {
          this.employee[j]=this.e[i];
          j++;
        }


        if(this.e[i].status!='Not Approve')
        {
          this.isEdit=true;
        }
        else
        {
          this.isEdit=false;
        }

      }


  }
  deleteLeave(i)
  {
    this.e.splice(i,1);
    localStorage.setItem("applayData",JSON.stringify(this.e));
    this.e=JSON.parse(localStorage.getItem("applayData"));
    this.employee=this.e;
  }
model3:any={};
myvalue;
  editLeave(i)
  {
    this.isupdate=false;
    this.model3.fromdate=this.e[i].fromdate;
    this.model3.todate=this.e[i].todate;
    this.myvalue=i;
  }
  updateLeave()
  {
    //this.isEdit=false;
     let k=this.myvalue;
     this.model4=this.leaveform.value;
     this.model5.fromdate=this.model4.fromdate;
     this.model5.todate=this.model4.todate;
     this.model5.username=this.username;
     this.model5.status=this.status;
     for(let i=0;i<this.e.length;i++)
     {
       if(i==k)
       {
         this.e[i]=this.model5;
         localStorage.setItem("applayData",JSON.stringify(this.e));
         this.e=JSON.parse(localStorage.getItem("applayData"));
         this.employee=this.e;
       }
       if(this.e[i].status!='Not Approve')
     {
       this.isEdit=true;
     }
     else
     {
       this.isEdit=false;
     }
     }

     
     this.model4={};
     this.model5={};
  }


}
