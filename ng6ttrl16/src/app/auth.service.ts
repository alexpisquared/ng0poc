import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
	success: boolean;
	message: string;
}
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	private signedInStatus  = JSON.parse(localStorage.getItem('loggedIn')||'false') 

	constructor(private http: HttpClient) {}

	setSignedIn(value: boolean) {
		this.signedInStatus = value;
		localStorage.setItem('loggedIn', 'true') 
	}
	get isSignedIn() {
		return JSON.parse(localStorage.getItem('loggedIn')||this.signedInStatus.toString());
	}

	getUserDetails(username, password) {
		// post these details to API server, return user info if correct,.
		return this.http.post('/api/auth.php', {
			username,
			password
			// })
			// .subscribe(data => {
			// 	console.log(data, ' is what we got from the server.')
		});
	}
}
