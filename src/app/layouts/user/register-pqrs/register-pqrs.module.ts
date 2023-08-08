import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPqrsRoutingModule } from './register-pqrs-routing.module';
import { RegisterPqrsComponent } from './register-pqrs.component';


@NgModule({
  declarations: [
    RegisterPqrsComponent
  ],
  imports: [
    CommonModule,
    RegisterPqrsRoutingModule
  ]
})
export class RegisterPqrsModule { }
