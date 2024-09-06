import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesFinancierasComponent } from './variables-financieras.component';

describe('VariablesFinancierasComponent', () => {
  let component: VariablesFinancierasComponent;
  let fixture: ComponentFixture<VariablesFinancierasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesFinancierasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VariablesFinancierasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
