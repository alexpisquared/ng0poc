import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoresComponent } from './user-cores.component';
import { HttpClientModule } from '@angular/common/http';

describe('UserCoresComponent', () => {
  let component: UserCoresComponent;
  let fixture: ComponentFixture<UserCoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
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
