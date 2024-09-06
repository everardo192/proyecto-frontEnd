import { TestBed } from '@angular/core/testing';

import { DatoViviendaService } from './dato-vivienda.service';

describe('DatoViviendaService', () => {
  let service: DatoViviendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoViviendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
