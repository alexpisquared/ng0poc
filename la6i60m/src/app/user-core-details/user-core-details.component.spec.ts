import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoreDetailsComponent } from './user-core-details.component';

describe('UserCoreDetailsComponent', () => {
  let component: UserCoreDetailsComponent;
  let fixture: ComponentFixture<UserCoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
