import { TestBed } from '@angular/core/testing';

import { Housesapi } from './housesapi';

describe('Housesapi', () => {
  let service: Housesapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Housesapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
