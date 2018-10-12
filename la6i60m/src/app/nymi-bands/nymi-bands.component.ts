import { Component, OnInit } from '@angular/core';
import { DataNesService } from '../data-nes.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
	selector: 'app-nymi-bands',
	templateUrl: './nymi-bands.component.html',
	styleUrls: [ './nymi-bands.component.scss' ],
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
export class NymiBandsComponent implements OnInit {
	nymibands$: Object;

	constructor(private data: DataNesService) {}

	ngOnInit() {
		this.data.getBands().subscribe((data) => (this.nymibands$ = data));
	}
}
