import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SignInService } from './sign-in.service';
import { AuthService } from '../auth.service';
import { User } from './user';
import { SignInState } from './sign-in-state';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: [ './sign-in.component.css' ]
})
export class SignInComponent implements OnInit, OnDestroy {
	user: User;
	signInResult: string;
	isSigned: boolean;
	private subscription: Subscription;

	constructor(
		private auth: AuthService,
		private signInService: SignInService,
		private router: Router,
		private sis: SignInState
	) {}

	ngOnInit() {
		this.subscription = this.signInService.signedIn$.subscribe((x) => this.onSignInChanged(x));
		this.reset();
	}
	reset() {
		this.user = { username: '', password: '' };
		this.signInResult = '';
	}
	onSubmit() {
		let isSuccess: boolean;
		isSuccess = this.signInService.signInUser(this.user);
		if (isSuccess) {
			this.signInResult = 'Signed IN !!!';
			this.router.navigate([ 'admin' ]);
			this.auth.setSignedIn(true);
		} else {
			this.signInResult = 'SignIn FAILED !!!';
			//window.alert(data.message);
		}
	}
	signinUser(event) {
		event.preventDefault();
		const target = event.target;
		const username = target.querySelector('#username');
		const password = target.querySelector('#password');
		this.auth.getUserDetails(username, password).subscribe((data) => {
			// if(data.success){
			//   //redirect thr person to /admin
			this.router.navigate([ 'admin' ]);
			this.auth.setSignedIn(true);
			// }else{
			//   window.alert(data.message)
			window.alert('data.message');
		});
		console.log(username, password);
	}

	onSignInChanged(data: SignInState) {
		if (data.isSignedIn === true) {
			this.isSigned = true;
			this.user = { username: '', password: '' };
		} else {
			this.isSigned = false;
			this.signInResult = '';
		}
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	onFormChanged() {
		this.signInResult = '';
	}
}
