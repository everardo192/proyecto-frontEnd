import { TestBed } from '@angular/core/testing';

import { CondicionFinancieraService } from './condicion-financiera.service';

describe('CondicionFinancieraService', () => {
  let service: CondicionFinancieraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicionFinancieraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
