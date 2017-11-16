import { TestBed, inject } from '@angular/core/testing';

import { ProductGuardServiceService } from './product-guard-service.service';

describe('ProductGuardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuardServiceService]
    });
  });

  it('should be created', inject([ProductGuardServiceService], (service: ProductGuardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
