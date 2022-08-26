import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent  {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    time: ['', Validators.required],
    date: ['', Validators.required],


  });
  secondFormGroup = this._formBuilder.group({
    add1: ['', Validators.required],
    add2: ['', Validators.required],
    add3: ['', Validators.required],
  });
  isLinear = false;


get name(){
  return this.firstFormGroup.get('name');
}
get time(){
  return this.firstFormGroup.get('time');
}
get date(){
  return this.firstFormGroup.get('date');
}

get add1(){
  return this.secondFormGroup.get('add1');
}
get add2(){
  return this.secondFormGroup.get('add2');
}
get add3(){
  return this.secondFormGroup.get('add3');
}

firstformvalue:any;
secondformvalue:any;

submitstatus!:boolean;

submit(){
  this.firstformvalue=this.firstFormGroup.value;
  this.secondformvalue=this.secondFormGroup.value;
  this.submitstatus=true;
}



ngOnInit(): void {
}

}
