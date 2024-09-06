import { TestBed } from '@angular/core/testing';

import { IdentificadorInversionesService } from './identificador-inversiones.service';

describe('IdentificadorInversionesService', () => {
  let service: IdentificadorInversionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificadorInversionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
