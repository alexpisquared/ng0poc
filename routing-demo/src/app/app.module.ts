import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
// import { UserListComponent } from './user-list/user-list.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [AppComponent, routingComponents, PageNotFoundComponent, UserDetailComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
