import { TestBed } from '@angular/core/testing';

import { VariablesFinancierasService } from './variables-financieras.service';

describe('VariablesFinancierasService', () => {
  let service: VariablesFinancierasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablesFinancierasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
