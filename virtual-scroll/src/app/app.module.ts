import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule, ScrollDispatcher } from '@angular/cdk/scrolling';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, ScrollingModule],
  providers: [ScrollDispatcher],
  declarations: [AppComponent, VirtualScrollComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     VirtualScrollComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
