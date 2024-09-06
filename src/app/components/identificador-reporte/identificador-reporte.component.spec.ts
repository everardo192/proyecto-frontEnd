import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorReporteComponent } from './identificador-reporte.component';

describe('IdentificadorReporteComponent', () => {
  let component: IdentificadorReporteComponent;
  let fixture: ComponentFixture<IdentificadorReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificadorReporteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
