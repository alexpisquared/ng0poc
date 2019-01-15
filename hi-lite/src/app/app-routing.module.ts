import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

const routes: Routes = [
  { path: 'hero-form-reactive', component: HeroFormReactiveComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'nymi-bands', component: NymiBandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
