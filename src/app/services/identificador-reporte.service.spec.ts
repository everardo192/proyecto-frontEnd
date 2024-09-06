import { TestBed } from '@angular/core/testing';

import { IdentificadorReporteService } from './identificador-reporte.service';

describe('IdentificadorReporteService', () => {
  let service: IdentificadorReporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificadorReporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
