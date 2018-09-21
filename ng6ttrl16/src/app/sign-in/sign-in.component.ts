import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SignInService } from './sign-in.service';
import { AuthService } from '../auth.service';
import { User } from './user';
import { LoginState } from './login-state';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit, OnDestroy {
	user: User;
	loginResult: string;
	isSigned: boolean;
	private subscription: Subscription;

	constructor(private auth: AuthService, private signInService: SignInService, private router: Router) {}

	ngOnInit() {
		this.subscription = this.signInService.loggedIn$.subscribe((x) => this.onLoginChanged(x));
		this.reset();
	}
	reset() {
		this.user = { username: '', password: '' };
		this.loginResult = '';
  }
  onSubmit() { // signinUser(event) {
		let isSuccess: boolean;
		isSuccess = this.signInService.loginUser(this.user);
		if (isSuccess) {
			this.loginResult = 'Logged IN !!!';
		} else {
			this.loginResult = 'Login FAILED !!!';
		}
		// event.preventDefault();
		// const target = event.target;
		// const username = target.querySelector('#username');
		// const password = target.querySelector('#password');
		// this.auth.getUserDetails(username, password).subscribe((data) => {
		// 	// if(data.success){
		// 	//   //redirect hte person to /admin
		// 	this.router.navigate([ 'admin' ]);
		// 	this.auth.setLoggedIn(true);
		// 	// }else{
		// 	//   window.alert(data.message)
		// 	window.alert('data.message');
		// });

		console.log(username, password);
	}

	onLoginChanged(data: LoginState) {
		if (data.isLoggedIn === true) {
			this.isSigned = true;
			this.user = { username: '', password: '' };
		} else {
			this.isSigned = false;
			this.loginResult = '';
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onFormChanged() {
		this.loginResult = '';
	}
}
