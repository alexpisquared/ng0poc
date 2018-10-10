import { TestBed } from '@angular/core/testing';

import { DataNesService } from './data-nes.service';

describe('DataNesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataNesService = TestBed.get(DataNesService);
    expect(service).toBeTruthy();
  });
});
