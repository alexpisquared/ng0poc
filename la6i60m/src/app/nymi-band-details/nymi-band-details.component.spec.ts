import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NymiBandDetailsComponent } from './nymi-band-details.component';

describe('NymiBandDetailsComponent', () => {
  let component: NymiBandDetailsComponent;
  let fixture: ComponentFixture<NymiBandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NymiBandDetailsComponent ]
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
