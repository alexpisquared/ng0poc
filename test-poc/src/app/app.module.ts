import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [ AppComponent, SidebarComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	exports: [ SidebarComponent ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
