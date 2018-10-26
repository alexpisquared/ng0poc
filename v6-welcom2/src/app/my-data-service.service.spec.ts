import { TestBed } from '@angular/core/testing';

import { MyDataServiceService } from './my-data-service.service';

describe('MyDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDataServiceService = TestBed.get(MyDataServiceService);
    expect(service).toBeTruthy();
  });
});
