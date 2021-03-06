import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //import { Observable } from 'rxjs';

import { DataService } from '../data.service';   

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: [ './details.component.scss' ]
})
export class DetailsComponent implements OnInit {
	band$: Object;

	constructor(private bandService: DataService, private route: ActivatedRoute) {
		this.route.params.subscribe((params) => (this.band$ = params.id));
	}

	ngOnInit() {
		this.bandService.getUser(this.band$).subscribe((bandService) => (this.band$ = bandService));
	}
}
