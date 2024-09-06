import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificadorInversionesComponent } from './identificador-inversiones.component';

describe('IdentificadorInversionesComponent', () => {
  let component: IdentificadorInversionesComponent;
  let fixture: ComponentFixture<IdentificadorInversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificadorInversionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificadorInversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
