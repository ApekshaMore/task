import { Component, OnInit } from '@angular/core';
import { JsonServService } from 'src/app/service/json-serv.service';


@Component({
  selector: 'app-data-disp',
  templateUrl: './data-disp.component.html',
  styleUrls: ['./data-disp.component.css']
})
export class DataDispComponent implements OnInit {
  msg:any;  
  details :any
  names:any=[]
  constructor(private service:JsonServService) { }

  ngOnInit(): void {
    // this.msg=this.service.readJsonData();
    // this.service.readJsonData().subscribe(
    //   data=> this.msg = JSON.stringify(data)      
    //   );
    this.service.readJsonData().subscribe(data => {
      this.details=data
      console.log(data);
      console.log(this.details);
      this.names=['Ajay','Bunty','chintan','Darshan','Rakesh','Mayank','Ramesh','Suresh','Jay','Prem']
  });
  //  console.log(this.msg);
  }

}
