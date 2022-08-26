import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

interface country {
  value: string;
  viewValue: string;
}
interface state {
  value: string;
  viewValue: string;
}
interface city {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  countrys: country[] = [
    {value: 'steak-0', viewValue: 'India'},
    {value: 'pizza-1', viewValue: 'Srilanka'},
    {value: 'tacos-2', viewValue: 'France'},
  ];

  states: state[] = [
    {value: 'steak-0', viewValue: 'Tamil Nadu'},
    {value: 'pizza-1', viewValue: 'Karnataka'},
    {value: 'tacos-2', viewValue: 'Andra Pradesh'},
  ];

  citys: city[] = [
    {value: 'steak-0', viewValue: 'Tiruvannamalai'},
    {value: 'pizza-1', viewValue: 'Chennai'},
    {value: 'tacos-2', viewValue: 'Krishnagiri'},
  ];

  firstFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    name: ['', Validators.required],
    time: ['', Validators.required],
    date: ['', Validators.required],

  })
  get country(){
    return this.firstFormGroup.get('country');
  }
  get state(){
    return this.firstFormGroup.get('state');
  }
   get city(){
    return this.firstFormGroup.get('city');
  }

  get name(){
    return this.firstFormGroup.get('name');
  }
  get time(){
    return this.firstFormGroup.get('time');
  }
  get date(){
    return this.firstFormGroup.get('date');
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
