import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorAcreditadoComponent } from './identificador-acreditado.component';

describe('IdentificadorAcreditadoComponent', () => {
  let component: IdentificadorAcreditadoComponent;
  let fixture: ComponentFixture<IdentificadorAcreditadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificadorAcreditadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorAcreditadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
