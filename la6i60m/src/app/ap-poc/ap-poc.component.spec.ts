import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApPocComponent } from './ap-poc.component';
import { HttpClientModule } from '@angular/common/http';

describe('ApPocComponent', () => {
  let component: ApPocComponent;
  let fixture: ComponentFixture<ApPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
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
