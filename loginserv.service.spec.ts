import { TestBed } from '@angular/core/testing';

import { LoginservService } from './loginserv.service';

describe('LoginservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginservService = TestBed.get(LoginservService);
    expect(service).toBeTruthy();
  });
});
