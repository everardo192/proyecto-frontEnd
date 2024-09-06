import { TestBed } from '@angular/core/testing';

import { IdentificadorCreditoService } from './identificador-credito.service';

describe('IdentificadorCreditoService', () => {
  let service: IdentificadorCreditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificadorCreditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
