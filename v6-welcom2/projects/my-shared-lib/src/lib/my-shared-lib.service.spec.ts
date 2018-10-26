import { TestBed } from '@angular/core/testing';

import { MySharedLibService } from './my-shared-lib.service';

describe('MySharedLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySharedLibService = TestBed.get(MySharedLibService);
    expect(service).toBeTruthy();
  });
});
