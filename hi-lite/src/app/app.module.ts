import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [AppComponent, HighlightDirective, HomeAdminComponent, NymiBandsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
