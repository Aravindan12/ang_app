
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersDetailsComponent } from '../users-details/users-details.component';

const routes: Routes = [
 {
    path:'',
    component:UsersComponent
  },
  {
    path:'user-list',
    component:UsersListComponent
  },
  {
    path:'user/:id',
    component:UsersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }