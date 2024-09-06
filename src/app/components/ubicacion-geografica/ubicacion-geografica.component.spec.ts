import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionGeograficaComponent } from './ubicacion-geografica.component';

describe('UbicacionGeograficaComponent', () => {
  let component: UbicacionGeograficaComponent;
  let fixture: ComponentFixture<UbicacionGeograficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionGeograficaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UbicacionGeograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
