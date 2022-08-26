import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.scss']
})
export class TelephoneComponent {

  firstFormGroup = this._formBuilder.group({
    phone: ['', Validators.required],})

    get country(){
      return this.firstFormGroup.get('phone');
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
