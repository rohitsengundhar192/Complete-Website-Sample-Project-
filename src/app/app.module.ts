import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './design/header/header.component';
import { BodyComponent } from './sidenavigation/body/body.component';
import { SidenavComponent } from './sidenavigation/sidenav/sidenav.component';
import { DashboardComponent } from './sidenavigation/dashboard/dashboard.component';
import { ProductsComponent } from './sidenavigation/products/products.component';
import { StaticsComponent } from './sidenavigation/statics/statics.component';
import { CoupensComponent } from './sidenavigation/coupens/coupens.component';
import { PagesComponent } from './sidenavigation/pages/pages.component';
import { MediaComponent } from './sidenavigation/media/media.component';
import { SettingsComponent } from './sidenavigation/settings/settings.component';
import { HeadComponent } from './head/head.component';
import { StepperComponent } from './component/stepper/stepper.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { FileComponent } from './component/file/file.component';
import { DialogueComponent } from './component/dialogue/dialogue.component';
import { FormComponent } from './component/form/form.component';
import { TelephoneComponent } from './component/telephone/telephone.component';
import { MulticountryComponent } from './component/multicountry/multicountry.component';
import { TimeComponent } from './component/time/time.component';
import { TableComponent } from './component/table/table.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AuditComponent } from './component/audit/audit.component';
import { DialogexampleComponent } from './component/dialogexample/dialogexample.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Audit1Component } from './component/audit1/audit1.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { TestComponent } from './component/test/test.component';
import { RealformComponent } from './component/realform/realform.component';
import { Test2Component } from './component/test2/test2.component';
import { Test3Component } from './component/test3/test3.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from './home/home.module';
import { FrontComponent } from './front/front.component';
import { Front1Component } from './front1/front1.component';
import { RealformsecComponent } from './component/component2/realformsec/realformsec.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { TripBookingComponent } from './component/trip-booking/trip-booking.component';
import { AverageTripBookingComponent } from './component/average-trip-booking/average-trip-booking.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StaticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    HeadComponent,
    StepperComponent,
    TabsComponent,
    FileComponent,DialogueComponent, FormComponent, TelephoneComponent, MulticountryComponent, TimeComponent, TableComponent,AuditComponent, DialogexampleComponent, Audit1Component, TestComponent, RealformComponent, Test2Component, Test3Component, MainNavComponent, FrontComponent, Front1Component, RealformsecComponent, DynamicFormComponent, TripBookingComponent, AverageTripBookingComponent,

  ],
  entryComponents:[DialogexampleComponent],
  imports: [
    BrowserModule,MaterialModule,
    AppRoutingModule,NgSelectModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,HttpClientModule,
    MatSortModule,NgxMatIntlTelInputComponent, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
