import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataNesService } from './data-nes.service';

describe('DataNesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], //tu:     NullInjectorError: No provider for HttpClient!
      providers: [DataNesService]
    });
  });

  // it('should be created ORG', () => {
  //   const service: DataNesService = TestBed.get(DataNesService);
  //   expect(service).toBeTruthy();
  // });

  it('should be created', inject(
    [DataNesService],
    (service: DataNesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
