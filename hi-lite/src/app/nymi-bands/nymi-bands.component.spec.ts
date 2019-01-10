import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NymiBandsComponent } from './nymi-bands.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NymiBandsComponent', () => {
  let component: NymiBandsComponent;
  let fixture: ComponentFixture<NymiBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //  1/2  Can't bind to 'formControl' since it isn't a known property of 'input'.
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [NymiBandsComponent, HighlightDirective] // Can't bind to 'searchedWords' since it isn't a known property of 'p'.
    }).compileComponents();
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
