import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoreDetailsComponent } from './user-core-details.component';
import { HttpClientModule } from '@angular/common/http';

describe('UserCoreDetailsComponent', () => {
  let component: UserCoreDetailsComponent;
  let fixture: ComponentFixture<UserCoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
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
