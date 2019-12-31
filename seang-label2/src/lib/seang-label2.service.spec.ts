import { TestBed } from '@angular/core/testing';

import { SeangLabel2Service } from './seang-label2.service';

describe('SeangLabel2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeangLabel2Service = TestBed.get(SeangLabel2Service);
    expect(service).toBeTruthy();
  });
});
