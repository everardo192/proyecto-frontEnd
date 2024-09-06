import { TestBed } from '@angular/core/testing';

import { IdentificadorAcreditadoService } from './identificador-acreditado.service';

describe('IdentificadorAcreditadoService', () => {
  let service: IdentificadorAcreditadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificadorAcreditadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
