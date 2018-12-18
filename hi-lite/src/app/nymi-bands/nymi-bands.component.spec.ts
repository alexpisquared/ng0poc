import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NymiBandsComponent } from './nymi-bands.component';

describe('NymiBandsComponent', () => {
  let component: NymiBandsComponent;
  let fixture: ComponentFixture<NymiBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
