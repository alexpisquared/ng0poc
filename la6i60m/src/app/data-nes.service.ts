import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataNesService {
	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get('https://localhost:44303/api/users');
	}
	getUserByDU(domain, username) {
		return this.http.get('https://localhost:44303/api/usercores/' + domain + '/' + username);
	}
	getUserByID(id) {
		return this.http.get('https://localhost:44303/api/users/' + id);
	}

	getBands() {
		return this.http.get('https://localhost:44303/api/nymibands');
	}
	getBandByID(id) {
		return this.http.get('https://localhost:44303/api/nymibands/' + id);
	}
}
