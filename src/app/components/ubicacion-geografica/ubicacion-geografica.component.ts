import { Component, OnInit } from '@angular/core';
import { UbicacionGeograficaActividadEconomicaService } from '../../services/ubicacion-geografica.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbicacionGeograficaActividadEconomica } from '../../models/ubicacion-geografica.model';

@Component({
  selector: 'app-ubicacion-geografica',
  templateUrl: './ubicacion-geografica.component.html',
  styleUrls: ['./ubicacion-geografica.component.css']
})
export class UbicacionGeograficaActividadEconomicaComponent implements OnInit {
  ubicacionForm: FormGroup;
  ubicaciones: UbicacionGeograficaActividadEconomica[] = [];
  selectedUbicacion: UbicacionGeograficaActividadEconomica | null = null;

  constructor(
    private fb: FormBuilder,
    private ubicacionService: UbicacionGeograficaActividadEconomicaService
  ) {
    // Inicializar el formulario reactivo
    this.ubicacionForm = this.fb.group({
      localidadDestino: ['', Validators.required],
      municipioDestino: [null, Validators.required],
      estadoDestino: [null, Validators.required],
      actEconomicaDestino: ['', Validators.required],
      identificadorCredito: this.fb.group({
        ideCredito: [null],  // Opcional
        ideLineaCredito: [null]  // Opcional
      })
    });
  }

  ngOnInit(): void {
    this.loadUbicaciones();
  }

  loadUbicaciones(): void {
    this.ubicacionService.getAll().subscribe(
      (data: UbicacionGeograficaActividadEconomica[]) => {
        this.ubicaciones = data;
      },
      (error) => {
        console.error('Error loading ubicaciones', error);
      }
    );
  }

  onSubmit(): void {
    if (this.ubicacionForm.valid) {
      // Preparar los datos para enviar
      const formData = this.ubicacionForm.value;

      // Si `identificadorCredito` no tiene valores, eliminarlo del objeto
      if (!formData.identificadorCredito.ideCredito && !formData.identificadorCredito.ideLineaCredito) {
        delete formData.identificadorCredito;
      }

      if (this.selectedUbicacion && this.selectedUbicacion.id) {
        // Actualizar ubicación existente
        this.ubicacionService.update(this.selectedUbicacion.id, formData).subscribe(
          (data) => {
            this.loadUbicaciones();
            this.ubicacionForm.reset();  // Resetear formulario después de actualizar
          },
          (error) => {
            console.error('Error updating ubicacion', error);
          }
        );
      } else {
        // Crear nueva ubicación
        this.ubicacionService.save(formData).subscribe(
          (data) => {
            this.loadUbicaciones();
            this.ubicacionForm.reset();  // Resetear formulario después de guardar
          },
          (error) => {
            console.error('Error saving ubicacion', error);
          }
        );
      }
    }
  }

  onDelete(id: number): void {
    this.ubicacionService.delete(id).subscribe(
      () => {
        this.loadUbicaciones();
      },
      (error) => {
        console.error('Error deleting ubicacion', error);
      }
    );
  }
}
