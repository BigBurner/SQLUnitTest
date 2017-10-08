import { TestBed, inject } from '@angular/core/testing';

import { UnitTestService } from './unit-test.service';

describe('UnitTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitTestService]
    });
  });

  it('should be created', inject([UnitTestService], (service: UnitTestService) => {
    expect(service).toBeTruthy();
  }));
});
