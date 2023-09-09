import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderGoBackSimpleComponent } from './components/header-go-back-simple/header-go-back-simple.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderGoBackSimpleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderGoBackSimpleComponent
  ]
})
export class SharedModule { }
