import { TestBed } from '@angular/core/testing';

import { CommonAccountVerifyService } from './common-account-verify.service';

describe('CommonAccountVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonAccountVerifyService = TestBed.get(CommonAccountVerifyService);
    expect(service).toBeTruthy();
  });
});
