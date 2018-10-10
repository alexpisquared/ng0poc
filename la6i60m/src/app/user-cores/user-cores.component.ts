import { Component, OnInit } from '@angular/core';
import { DataNesService } from '../data-nes.service';

@Component({
	selector: 'app-user-cores',
	templateUrl: './user-cores.component.html',
	styleUrls: [ './user-cores.component.scss' ]
})
export class UserCoresComponent implements OnInit {
	usercores$: Object;

	constructor(private data: DataNesService) {}

	ngOnInit() {
		this.data.getUsers().subscribe((data) => (this.usercores$ = data));
	}
}
