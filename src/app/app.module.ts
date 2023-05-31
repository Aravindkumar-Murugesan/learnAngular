import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {employeeComponent} from '../employee/employee.component';
import {employeeListComponent} from '../employee/employeeList.component';
import { employeeTitle } from 'src/employee/employeeTitle.pipe';
@NgModule({
  declarations: [
    AppComponent,employeeComponent,employeeListComponent,employeeTitle
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
