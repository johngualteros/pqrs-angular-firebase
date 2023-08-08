import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'me',
    loadChildren: () => import('./me/me.module').then(m => m.MeModule)
  },
  {
    path: 'register-pqrs',
    loadChildren: () => import('./register-pqrs/register-pqrs.module').then(m => m.RegisterPqrsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
