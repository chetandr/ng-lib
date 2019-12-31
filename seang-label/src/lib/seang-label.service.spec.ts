import { TestBed } from '@angular/core/testing';

import { SeangLabelService } from './seang-label.service';

describe('SeangLabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeangLabelService = TestBed.get(SeangLabelService);
    expect(service).toBeTruthy();
  });
});
