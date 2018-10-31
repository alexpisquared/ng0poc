import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserContactComponent } from './user-contact/user-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  {
    path: 'users/:id',
    component: UserDetailComponent,
    children: [
      { path: 'overview', component: UserOverviewComponent },
      { path: 'contact', component: UserContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  UserListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  UserDetailComponent,
  UserOverviewComponent,
  UserContactComponent
];
