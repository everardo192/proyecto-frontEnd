import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionFinancieraService } from '../../services/informacion-financiera.service';
import { InformacionFinanciera } from '../../models/informacion-financiera.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion-financiera',
  templateUrl: './informacion-financiera.component.html'
})
export class InformacionFinancieraComponent implements OnInit {
  informacionFinancieraForm!: FormGroup;
  informacionFinancieras: InformacionFinanciera[] = [];
  editMode = false;
  selectedId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private informacionFinancieraService: InformacionFinancieraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadInformacionFinancieras();
  }

  initForm(): void {
    this.informacionFinancieraForm = this.fb.group({
      concepto: ['', Validators.required],
      moneda: ['', Validators.required],
      dato: ['', Validators.required],
      reporte: [null], // Opcional
      tipoCartera: [''],
      tipoSaldo: [''],
      tipoMovimiento: [''],
      descripcion: [''],
      identificadorReporte: [null]  // Opcional
    });
  }

  loadInformacionFinancieras(): void {
    this.informacionFinancieraService.getAllInformacionFinancieras().subscribe((data) => {
      this.informacionFinancieras = data;
    });
  }

  onSubmit(): void {
    if (this.informacionFinancieraForm.valid) {
      const informacionFinanciera: InformacionFinanciera = this.informacionFinancieraForm.value;

      if (this.editMode && this.selectedId !== null) {
        // Actualizar
        informacionFinanciera.id = this.selectedId;
        this.informacionFinancieraService.updateInformacionFinanciera(informacionFinanciera).subscribe(
          () => {
            this.loadInformacionFinancieras();
            this.resetForm();
          },
          (error) => {
            console.error('Error al actualizar información financiera:', error);
          }
        );
      } else {
        // Crear
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(
          () => {
            this.loadInformacionFinancieras();
            this.resetForm();
          },
          (error) => {
            console.error('Error al guardar información financiera:', error);
          }
        );
      }
    }
  }

  onEdit(informacionFinanciera: InformacionFinanciera): void {
    this.editMode = true;
    this.selectedId = informacionFinanciera.id ?? null; // Manejar undefined asignando null
    this.informacionFinancieraForm.patchValue({
      ...informacionFinanciera,
      reporte: informacionFinanciera.reporte ?? null,  // Manejar undefined asignando null
      identificadorReporte: informacionFinanciera.identificadorReporte ?? null  // Manejar undefined asignando null
    });
  }

  onDelete(id: number): void {
    this.informacionFinancieraService.deleteInformacionFinanciera(id).subscribe(() => {
      this.loadInformacionFinancieras();
    });
  }

  resetForm(): void {
    this.informacionFinancieraForm.reset();
    this.editMode = false;
    this.selectedId = null;
  }
}
