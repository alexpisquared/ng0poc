import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
	declarations: [ AppComponent, HomeComponent, SignInComponent, AdminComponent ],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{
				path: 'sign-in',
				component: SignInComponent
			},
			{
				path: 'admin',
				component: AdminComponent
			},
			{
				path: '',
				component: HomeComponent
			}
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
