import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RealForm } from '../../realform/realform.component';
import {ApiService} from '../../../../service/api.service';

interface gender {
  value: string;
  viewValue: string;
}
interface country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-realformsec',
  templateUrl: './realformsec.component.html',
  styleUrls: ['./realformsec.component.scss']
})
export class RealformsecComponent implements OnInit {
  realforms!: RealForm[];
  [x: string]: any;

  constructor(private apiService: ApiService,private dialog : MatDialog,private _formBuilder: FormBuilder,private httpClient:HttpClient) {}


  getRealForm(){
    this.httpClient.get<any>('http://localhost:3000/get-user-details').subscribe(
      response =>{
        console.log(response);
        this.realforms = response;
      }
    );
  }




  countrys: country[] = [
    {value: 'steak-0', viewValue: 'India'},
    {value: 'pizza-1', viewValue: 'Srilanka'},
    {value: 'tacos-2', viewValue: 'France'},
  ];

  genders: gender[] = [
    {value: 'M', viewValue: 'Male'},
    {value: 'Fe', viewValue: 'Female'},
    {value: 'Ot', viewValue: 'Others'},
  ];

  firstFormGroup = this._formBuilder.group({
    name1: ['', Validators.required],
    gender1: ['', Validators.required],
    date1:['',Validators.required],
    country1:['',Validators.required],
  })


  get name1(){
    return this.firstFormGroup.get('name');
  }
  get gender1(){
    return this.firstFormGroup.get('gender');
  }
  get date1(){
    return this.firstFormGroup.get('date');
  }
  get country1(){
    return this.firstFormGroup.get('country');
  }

  firstformvalue:any;

submitstatus!:boolean;

submit(){
  this.firstformvalue=this.firstFormGroup.value;
  this.submitstatus=true;
  if(this.firstFormGroup.valid){

    this.apiService.postUserDetails(this.firstFormGroup.value)
    .subscribe({
      next:(res)=>{
        alert("registered Sucessfully !")
        this.firstFormGroup.reset();

      },
      error:()=>{
        alert("Not Registered Sucessfully")
      }
    })
  }
}

  ngOnInit(): void {
  }

}
