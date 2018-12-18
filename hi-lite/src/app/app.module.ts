import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';

import { RouterModule, Routes } from '@angular/router'; // ??     NullInjectorError: No provider for Router!

@NgModule({
  imports: [
    RouterModule.forRoot([]), // ??     NullInjectorError: No provider for Router!

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, HighlightDirective, HomeAdminComponent, NymiBandsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
