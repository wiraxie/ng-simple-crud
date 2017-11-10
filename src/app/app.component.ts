import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { NgIf } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';

//include stockService yg sudah di-get
import { stockService } from './stock.service';
import { Http, BaseRequestOptions, BaseResponseOptions, Jsonp } from '@angular/http';

@Component
({
  moduleId: module.id,
  selector: 'app-root',
  //templateUrl: './dashboard/dashboard.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  
{
  title="App is working!";
  //harus sama dengan file json

  public id='';
  public name='';
  public year='';
  public semester='';
  public major='';
  public score='';
  public email='';

  public newId='';
  public newName='';
  public newYear='';
  public newSemester='';
  public newMajor='';
  public newScore='';
  public newEmail='';

  Student: string[];

  showAdd:boolean = false;

  selectedStudent: any;
  updateEnable:boolean = false;
  notSaved:boolean = false;
  
  ngOnInit(): void
  {
    this.getAllStocks();
    //this.disableBtn();
    
    /* if(this.newId == null || this.newName == null || this.newYear == null || this.newSemester == null || this.newMajor == null || this.newScore == null || this.newEmail == null)
     {
       //document.getElementById("updButton").disabled = true;
       var element = <HTMLInputElement> document.getElementById("updButton");
       element.disabled= true;
     }*/
  }

  //constructor(private stockService: stockService){}
  constructor(private stockService: stockService){}

  //template utk read
  getAllStocks()
  {
    this.stockService.getStocksAPI().subscribe
    (
      //this... harus sama dengan yg  ...:string[]
      data =>  console.log(this.Student = data), //isinya data json
      error => console.log('server returns error')
      
    );
  }
  //panggil addStudent
  addStudent(newId: string, newName: string, newYear: string, newSemester: string, newMajor: string, newScore: string, newEmail: string)
  {
    this.stockService.addStudent(newId, newName, newYear, newSemester, newMajor, newScore, newEmail).subscribe(

      data =>
      {
        this.getAllStocks();
      }

    );
    console.log('ini', newId, newName, newYear , newSemester, newMajor, newScore, newEmail);
  }
  //end panggil add

  //panggil updStudent
  // updStudent(Id: string, newName: string, newYear: string, newSemester: string, newMajor: string, newScore: string, newEmail: string)
  // {
  //   this.stockService.updStudent(Id, newName, newYear, newSemester, newMajor, newScore, newEmail).subscribe(

  //     data =>
  //     {
  //       this.getAllStocks();
  //     }
  //   );
  //   console.log('ini', Id , newName, newYear, newSemester, newMajor, newScore, newEmail);
  // }
  updStudent(id, newName: string, newYear: string, newSemester: string, newMajor: string, newScore: string, newEmail: string) 
  {
     this.stockService.updStudent(this.selectedStudent.id, newName, newYear, newSemester, newMajor, newScore, newEmail).subscribe
   (
       data => 
     {
         this.getAllStocks();
       }
     );
   }
  loadStu(Student: any)
  {
    this.updateEnable = true;
    this.selectedStudent = Student;

    if(this.updateEnable = true)
    {
      this.showAdd = false;
    }
  }
  //end panggil updStudent

  //panggil delStudent
  delStudent(id: string)
  {
    this.stockService.delStudent(id).subscribe(

      data =>
      {
        this.getAllStocks();
      }

    );
  }
  //end panggil delStudent
}