import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

interface gender {
  value: string;
  viewValue: string;
}
interface country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-realform',
  templateUrl: './realform.component.html',
  styleUrls: ['./realform.component.scss']
})
export class RealformComponent implements OnInit {

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
    name: ['', Validators.required],
    gender: ['', Validators.required],
    date:['',Validators.required],
    country:['',Validators.required],
  })

  get name(){
    return this.firstFormGroup.get('name');
  }
  get gender(){
    return this.firstFormGroup.get('gender');
  }
  get date(){
    return this.firstFormGroup.get('date');
  }
  get country(){
    return this.firstFormGroup.get('country');
  }

  firstformvalue:any;

submitstatus!:boolean;

submit(){
  this.firstformvalue=this.firstFormGroup.value;
  this.submitstatus=true;
}

constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
