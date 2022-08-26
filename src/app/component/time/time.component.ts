import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import {formatDate } from '@angular/common';

import * as moment from 'moment'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent  {
  Date1 : Date=new Date();
  mydate;

  LocalDate:string=new Date().toLocaleString();

  //local to utc conversion
 date = moment.utc().toDate();
//utc to local conversion
  local = moment(this.date).toDate();


//Rxjs Timer

time = new Date();
  rxTime = new Date();
  intervalId;
  subscription!: Subscription;

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);



    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let NewTime = hour + ":" + minuts + ":" + seconds
        console.log(NewTime);
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  constructor(){
    this.mydate = moment.utc();

  }



}
