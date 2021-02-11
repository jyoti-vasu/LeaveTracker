import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-summary',
  templateUrl: './leave-summary.component.html',
  styleUrls: ['./leave-summary.component.css']
})
export class LeaveSummaryComponent implements OnInit {
 leaveinfo:any[];
 isApprove=true;
  constructor() { }

  ngOnInit() {
    this.leaveinfo=JSON.parse(localStorage.getItem("applayData"));
  }


  approval(i)
  {
       for(let j=0;j<this.leaveinfo.length;j++)
       {
         if(j==i)
         {
             this.leaveinfo[j].status="Approved";
             localStorage.setItem("applayData",JSON.stringify(this.leaveinfo));
             this.leaveinfo=JSON.parse(localStorage.getItem("applayData"));
         }
       }
  }

  notApproval(i)
  {

    for(let j=0;j<this.leaveinfo.length;j++)
    {
      if(j==i)
      {
          this.leaveinfo[j].status="Rejected";
          localStorage.setItem("applayData",JSON.stringify(this.leaveinfo));
          this.leaveinfo=JSON.parse(localStorage.getItem("applayData"));
      }
    }

  }

}
