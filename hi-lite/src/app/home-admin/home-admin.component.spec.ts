import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminComponent } from './home-admin.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeAdminComponent', () => {
  let component: HomeAdminComponent;
  let fixture: ComponentFixture<HomeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Error StaticInjectorError DynamicTestModule Router karma
      declarations: [HomeAdminComponent]
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
