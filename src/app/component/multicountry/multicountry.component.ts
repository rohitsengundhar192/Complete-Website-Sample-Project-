import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-multicountry',
  templateUrl: './multicountry.component.html',
  styleUrls: ['./multicountry.component.scss']
})
export class MulticountryComponent
{
  toppings = new FormControl('');

  toppingList: string[] = ['India','USA','France','Germany','China','Italy','Russia','Albania','Belgium','Brazil','Chili','Denmark','Egypt','Japan','Kwait'];

  firstFormGroup = this._formBuilder.group({
    select: ['', Validators.required],})

    get select(){
      return this.firstFormGroup.get('select');
    }
    firstformvalue:any;

submitstatus!:boolean;

submit(){
  this.firstformvalue=this.firstFormGroup.value;
  this.submitstatus=true;
}
constructor(private _formBuilder: FormBuilder) {}
}



