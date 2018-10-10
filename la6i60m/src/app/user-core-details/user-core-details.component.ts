import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataNesService } from '../data-nes.service';

@Component({
	selector: 'app-user-core-details',
	templateUrl: './user-core-details.component.html',
	styleUrls: [ './user-core-details.component.scss' ]
})
export class UserCoreDetailsComponent implements OnInit {
	user$: Object;

	constructor(private data: DataNesService, private route: ActivatedRoute) {
		this.route.params.subscribe((params) => (this.user$ = params.id));
	}

	ngOnInit() {
		this.data.getUserByID(this.user$).subscribe((data) => (this.user$ = data)); // this.data.getUser(this.user$.domain, this.user$.username).subscribe((data) => (this.user$ = data));
	}
}
