import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule] // tu: karma fix: Error: StaticInjectorError(DynamicTestModule)[HttpClient]:   StaticInjectorError(Platform: core)[HttpClient]:         NullInjectorError: No provider for HttpClient!
    })
  );

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
