import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPqrsComponent } from './register-pqrs.component';

const routes: Routes = [
  {
    path: '',
    component : RegisterPqrsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPqrsRoutingModule { }
