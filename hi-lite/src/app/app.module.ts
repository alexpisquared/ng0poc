import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NymiBandsComponent } from './nymi-bands/nymi-bands.component';

import { RouterModule, Routes } from '@angular/router'; // ??     NullInjectorError: No provider for Router!
import {
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { MateriaFormValidationComponent } from './materia-form-validation/materia-form-validation.component';
// import { AlterEgoDirective } from './shared/alter-ego.directive';
// import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
// import { IdentityRevealedDirective } from './shared/identity-revealed.directive';

@NgModule({
  imports: [
    RouterModule.forRoot([]), // ??     NullInjectorError: No provider for Router!
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeAdminComponent,
    NymiBandsComponent,
    HeroFormReactiveComponent,
    MateriaFormValidationComponent,
    // AlterEgoDirective,
    // ForbiddenNameDirective,
    // IdentityRevealedDirective
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
