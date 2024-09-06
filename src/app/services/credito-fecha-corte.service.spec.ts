import { TestBed } from '@angular/core/testing';

import { CreditoFechaCorteService } from './credito-fecha-corte.service';

describe('CreditoFechaCorteService', () => {
  let service: CreditoFechaCorteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditoFechaCorteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
