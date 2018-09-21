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
	private signedInStatus = false;

	constructor(private http: HttpClient) {}

	setSignedIn(value: boolean) {
		this.signedInStatus = value;
	}
	get isSignedIn() {
		return this.signedInStatus;
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
