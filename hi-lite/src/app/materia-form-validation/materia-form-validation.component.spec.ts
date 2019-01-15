import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFormValidationComponent } from './materia-form-validation.component';

describe('MateriaFormValidationComponent', () => {
  let component: MateriaFormValidationComponent;
  let fixture: ComponentFixture<MateriaFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
