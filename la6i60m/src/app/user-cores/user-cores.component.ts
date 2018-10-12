import { Component, OnInit } from '@angular/core';
import { DataNesService } from '../data-nes.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-user-cores',
	templateUrl: './user-cores.component.html',
	styleUrls: [ './user-cores.component.scss' ],
	animations: [
		trigger('listStagger', [
			transition('* <=> *', [
				query(
					':enter',
					[
						style({ opacity: 0, transform: 'translateY(-15px)' }),
						stagger('50ms', animate('550ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' })))
					],
					{ optional: true }
				),
				query(':leave', animate('50ms', style({ opacity: 0 })), { optional: true })
			])
		])
	]
})
export class UserCoresComponent implements OnInit {
	usercores$: Object;

	constructor(private data: DataNesService) {}

	ngOnInit() {
		this.data.getUsers().subscribe((data) => (this.usercores$ = data));
	}
}
