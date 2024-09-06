import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorCreditoComponent } from './identificador-credito.component';

describe('IdentificadorCreditoComponent', () => {
  let component: IdentificadorCreditoComponent;
  let fixture: ComponentFixture<IdentificadorCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificadorCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
