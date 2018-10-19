import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('DetailsComponent', () => {
	let component: DetailsComponent;
	let fixture: ComponentFixture<DetailsComponent>;

	beforeEach(
		async(() => {
			let route = new ActivatedRoute();
			TestBed.configureTestingModule({
				imports: [ HttpClientModule ], //tu:     NullInjectorError: No provider for HttpClient!
				declarations: [ DetailsComponent ],
				providers: [
					{
						provide: ActivatedRoute,
						usevalue: route
					}
					// ,        {          provide: NymiBandServiceBase,          usevalue: <NymiBandServiceBase>new NymiBandService()        }
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
