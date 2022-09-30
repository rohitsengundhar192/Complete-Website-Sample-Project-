import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComponent } from './component/file/file.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { DialogueComponent } from './component/dialogue/dialogue.component';
import { FormComponent } from './component/form/form.component';
import { TelephoneComponent } from './component/telephone/telephone.component';
import { MulticountryComponent } from './component/multicountry/multicountry.component';
import { TimeComponent } from './component/time/time.component';
import { TableComponent } from './component/table/table.component';

import { AuditComponent } from './component/audit/audit.component';
import { RealformComponent } from './component/realform/realform.component';
import { Test3Component } from './component/test3/test3.component';
import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './home/component/firstpage/firstpage.component';
import { SecondpageComponent } from './home/component/secondpage/secondpage.component';
import { HeadComponent } from './head/head.component';
import { FrontComponent } from './front/front.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { TripBookingComponent } from './component/trip-booking/trip-booking.component';
import { AverageTripBookingComponent } from './component/average-trip-booking/average-trip-booking.component';


const routes: Routes = [
  {
    path:'',redirectTo:'front',pathMatch:'full'
  },

{
  path:'home',component:HomeComponent,
  children:[
    {path:'firstpage',component:FirstpageComponent},
    {path:'secondpage',component:SecondpageComponent}
  ]
},


  {path:'head',component:HeadComponent,
  children:[
    {path:'step',component:StepperComponent},
    {path:'tabs',component:TabsComponent},
    {path:'file',component:FileComponent},
    {path:'dialogue',component:DialogueComponent},
    {path:'reform',component:RealformComponent},
    {path:'form',component:FormComponent},
    {path:'tel',component:TelephoneComponent},
    {path:'mul',component:MulticountryComponent},
    {path:'time',component:TimeComponent},
    {path:'table',component:TableComponent},
    {path:'audit',component:AuditComponent},
    {path:'test',component:Test3Component},
    {path:'dyn',component:DynamicFormComponent},
    {path:'trip',component:TripBookingComponent},
    {path:'ave',component:AverageTripBookingComponent},
  ]
},
  {path:'front',component:FrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
