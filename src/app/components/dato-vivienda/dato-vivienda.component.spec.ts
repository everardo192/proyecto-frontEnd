import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoViviendaComponent } from './dato-vivienda.component';

describe('DatoViviendaComponent', () => {
  let component: DatoViviendaComponent;
  let fixture: ComponentFixture<DatoViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoViviendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatoViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
