import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListEmployee } from './list-employee/list-employee';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule } from '@angular/forms';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';

@NgModule({
  declarations: [App, ListEmployee, CreateEmployee, UpdateEmployee, EmployeeDetails],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
