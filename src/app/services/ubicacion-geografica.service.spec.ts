import { TestBed } from '@angular/core/testing';

import { UbicacionGeograficaService } from './ubicacion-geografica.service';

describe('UbicacionGeograficaService', () => {
  let service: UbicacionGeograficaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionGeograficaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
