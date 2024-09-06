import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoFechaCorteComponent } from './credito-fecha-corte.component';

describe('CreditoFechaCorteComponent', () => {
  let component: CreditoFechaCorteComponent;
  let fixture: ComponentFixture<CreditoFechaCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoFechaCorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditoFechaCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
