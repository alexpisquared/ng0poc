import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoresComponent } from './user-cores.component';

describe('UserCoresComponent', () => {
  let component: UserCoresComponent;
  let fixture: ComponentFixture<UserCoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
