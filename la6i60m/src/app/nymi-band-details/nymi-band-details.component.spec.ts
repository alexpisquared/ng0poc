import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NymiBandDetailsComponent } from './nymi-band-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('NymiBandDetailsComponent', () => {
  let component: NymiBandDetailsComponent;
  let fixture: ComponentFixture<NymiBandDetailsComponent>;

  beforeEach(async(() => {
			let route = new ActivatedRoute();
      TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
      declarations: [ NymiBandDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          usevalue: route
        }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NymiBandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
