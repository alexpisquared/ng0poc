import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPocComponent } from './ap-poc.component';

describe('ApPocComponent', () => {
  let component: ApPocComponent;
  let fixture: ComponentFixture<ApPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
