import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatoViviendaService } from '../../services/dato-vivienda.service';
import { IdentificadorCreditoService } from '../../services/identificador-credito.service';
import { DatoVivienda } from '../../models/dato-vivienda.model';
import { IdentificadorCredito } from '../../models/identificador-credito.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-dato-vivienda',
  templateUrl: './dato-vivienda.component.html',
  styleUrls: ['./dato-vivienda.component.css']
})
export class DatoViviendaComponent implements OnInit {
  datoViviendaForm: FormGroup;
  datoViviendas: DatoVivienda[] = [];
  identificadorCreditos: IdentificadorCredito[] = []; // Lista de IdentificadorCredito
  currentDatoVivienda: DatoVivienda | null = null; // DatoVivienda actual para edición

  constructor(
    private formBuilder: FormBuilder,
    private datoViviendaService: DatoViviendaService,
    private identificadorCreditoService: IdentificadorCreditoService
  ) {
    // Inicializar el FormGroup
    this.datoViviendaForm = this.formBuilder.group({
      id: [null],
      valorVivienda: ['', Validators.required],
      valorInmueble: ['', Validators.required],
      noAvaluo: ['', Validators.required],
      loan: ['', Validators.required],
      identificadorCreditoId: [null]  // Eliminar Validators.required para que sea opcional
    });
  }

  ngOnInit(): void {
    this.loadAllDatoVivienda();
    this.loadAllIdentificadorCredito();
  }

  loadAllDatoVivienda(): void {
    this.datoViviendaService.getAll().pipe(
      catchError(error => {
        console.error('Error loading DatoVivienda data', error);
        return of([]);
      })
    ).subscribe((data: DatoVivienda[]) => {
      this.datoViviendas = data;
    });
  }

  loadAllIdentificadorCredito(): void {
    this.identificadorCreditoService.getAllIdentificadorCreditos().pipe(
      catchError(error => {
        console.error('Error loading IdentificadorCredito data', error);
        return of([]);
      })
    ).subscribe((data: IdentificadorCredito[]) => {
      this.identificadorCreditos = data;
    });
  }

  onSubmit(): void {
    if (this.datoViviendaForm.valid) {
      const datoVivienda: DatoVivienda = this.datoViviendaForm.value;
      
      // Si identificadorCreditoId está vacío, establezca su valor como nulo.
      if (!datoVivienda.identificadorCreditoId) {
        datoVivienda.identificadorCreditoId = null;
      }
      
      if (datoVivienda.id) {
        this.updateDatoVivienda(datoVivienda.id, datoVivienda);
      } else {
        this.createDatoVivienda(datoVivienda);
      }
    }
  }

  createDatoVivienda(datoVivienda: DatoVivienda): void {
    this.datoViviendaService.create(datoVivienda).pipe(
      catchError(error => {
        console.error('Error creating DatoVivienda', error);
        return of(null);
      })
    ).subscribe((data: DatoVivienda | null) => {
      if (data) {
        this.datoViviendas.push(data);
        this.datoViviendaForm.reset();
        console.log('DatoVivienda created successfully');
      }
    });
  }

  updateDatoVivienda(id: number | undefined, datoVivienda: DatoVivienda): void {
    if (id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.datoViviendaService.update(id, datoVivienda).pipe(
      catchError(error => {
        console.error('Error updating DatoVivienda', error);
        return of(null);
      })
    ).subscribe((data: DatoVivienda | null) => {
      if (data) {
        const index = this.datoViviendas.findIndex(d => d.id === id);
        if (index !== -1) {
          this.datoViviendas[index] = data;
        }
        this.datoViviendaForm.reset();
        console.log('DatoVivienda updated successfully');
      }
    });
  }

  deleteDatoVivienda(id: number | undefined): void {
    if (id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.datoViviendaService.delete(id).pipe(
      catchError(error => {
        console.error('Error deleting DatoVivienda', error);
        return of(null);
      })
    ).subscribe(() => {
      this.datoViviendas = this.datoViviendas.filter(d => d.id !== id);
      console.log('DatoVivienda deleted successfully');
    });
  }

  editDatoVivienda(id: number | undefined): void {
    if (id === undefined) {
      console.error('ID is undefined');
      return;
    }
    this.datoViviendaService.getById(id).pipe(
      catchError(error => {
        console.error('Error fetching DatoVivienda data', error);
        return of(null);
      })
    ).subscribe((data: DatoVivienda | null) => {
      if (data) {
        this.datoViviendaForm.patchValue(data);
        this.currentDatoVivienda = data;
      }
    });
  }
}
