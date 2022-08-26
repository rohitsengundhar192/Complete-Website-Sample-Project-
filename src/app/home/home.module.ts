import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { SecondpageComponent } from './component/secondpage/secondpage.component';



@NgModule({
  declarations: [
    FirstpageComponent,
    SecondpageComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
