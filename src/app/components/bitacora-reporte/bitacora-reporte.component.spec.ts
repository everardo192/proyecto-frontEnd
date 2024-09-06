import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraReporteComponent } from './bitacora-reporte.component';

describe('BitacoraReporteComponent', () => {
  let component: BitacoraReporteComponent;
  let fixture: ComponentFixture<BitacoraReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BitacoraReporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BitacoraReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
