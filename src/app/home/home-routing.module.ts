import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { SecondpageComponent } from './component/secondpage/secondpage.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
   path:'home',component:HomeComponent,
   children:[
    {path:'firstpage',component:FirstpageComponent},
    {path:'secondpage',component:SecondpageComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
