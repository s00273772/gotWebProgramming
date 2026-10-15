import { TestBed } from '@angular/core/testing';

import { Charactersapi } from './charactersapi';

describe('Charactersapi', () => {
  let service: Charactersapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Charactersapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
