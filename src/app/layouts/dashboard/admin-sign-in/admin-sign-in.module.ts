import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSignInRoutingModule } from './admin-sign-in-routing.module';
import { AdminSignInComponent } from './admin-sign-in.component';


@NgModule({
  declarations: [
    AdminSignInComponent
  ],
  imports: [
    CommonModule,
    AdminSignInRoutingModule
  ]
})
export class AdminSignInModule { }
