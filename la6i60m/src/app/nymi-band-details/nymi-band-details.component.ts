import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataNesService } from '../data-nes.service';

@Component({
  selector: 'app-nymi-band-details',
  templateUrl: './nymi-band-details.component.html',
  styleUrls: ['./nymi-band-details.component.scss']
})
export class NymiBandDetailsComponent implements OnInit {
	band$: Object;

	constructor(private data: DataNesService, private route: ActivatedRoute) {
		this.route.params.subscribe((params) => (this.band$ = params.id));
	}

	ngOnInit() {
		this.data.getBandByID(this.band$).subscribe((data) => (this.band$ = data)); // this.data.getband(this.band$.domain, this.band$.bandname).subscribe((data) => (this.band$ = data));
	}
}
