import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NymiBandsComponent } from './nymi-bands.component';
import { HttpClientModule } from '@angular/common/http';

describe('NymiBandsComponent', () => {
  let component: NymiBandsComponent;
  let fixture: ComponentFixture<NymiBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
      declarations: [ NymiBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NymiBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
