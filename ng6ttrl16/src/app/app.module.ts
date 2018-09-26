import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInModule } from './sign-in/sign-in.module';
import { SignInState } from './sign-in/sign-in-state';
// import { SignInState } from './sign-in/sign-in-state';

@NgModule({
	declarations: [ AppComponent, HomeComponent, SignInComponent, AdminComponent ],
	imports: [
		HttpClientModule,
		BrowserModule,
		FormsModule,
		SignInModule,
		RouterModule.forRoot([
			{ path: 'sign-in', component: SignInComponent },
			{ path: 'admin', component: AdminComponent, canActivate: [ AuthGuard ] },
			{ path: '', component: HomeComponent },
			{ path: '**', component: HomeComponent }
		])
	],
	providers: [ AuthService, AuthGuard, SignInState ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
