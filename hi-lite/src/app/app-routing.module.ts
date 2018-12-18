import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';

const routes: Routes = [
  { path: 'home-admin', component: HomeAdminComponent } /*          */,
  { path: 'nymi-bands', component: NymiBandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
