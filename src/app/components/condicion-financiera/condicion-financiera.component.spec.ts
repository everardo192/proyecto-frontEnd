import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionFinancieraComponent } from './condicion-financiera.component';

describe('CondicionFinancieraComponent', () => {
  let component: CondicionFinancieraComponent;
  let fixture: ComponentFixture<CondicionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondicionFinancieraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CondicionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
