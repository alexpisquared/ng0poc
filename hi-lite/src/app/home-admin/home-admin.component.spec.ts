import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminComponent } from './home-admin.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HighlightDirective } from '../highlight.directive';

describe('HomeAdminComponent', () => {
  let component: HomeAdminComponent;
  let fixture: ComponentFixture<HomeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule // Can't bind to 'formControl' since it isn't a known property of 'input'.
        RouterTestingModule //  Error StaticInjectorError DynamicTestModule Router karma
      ],
      declarations: [HomeAdminComponent] // , HighlightDirective] // Can't bind to 'searchedWords' since it isn't a known property of 'p'.
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
