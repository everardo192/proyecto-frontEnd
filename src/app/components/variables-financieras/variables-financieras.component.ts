// src/app/components/variables-financieras/variables-financieras.component.ts

import { Component, OnInit } from '@angular/core';
import { VariablesFinancierasService } from '../../services/variables-financieras.service';
import { VariablesFinancieras } from '../../models/variables-financieras.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-variables-financieras',
  templateUrl: './variables-financieras.component.html',
  styleUrls: ['./variables-financieras.component.css']
})
export class VariablesFinancierasComponent implements OnInit {

  variablesFinancierasList: VariablesFinancieras[] = [];
  selectedVariable: VariablesFinancieras | null = null;
  form: FormGroup;

  constructor(
    private variablesFinancierasService: VariablesFinancierasService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      noTitulo: [''],
      costoAdquisitivo: [''],
      tasaInt: [''],
      grupoRiesgo: [''],
      valoracionDirecta: [''],
      resultadoValuacion: [''],
      identificadorCredito: [''],  // Campo opcional
      identificadorLineaCredito: ['']  // Campo opcional
    });
  }

  ngOnInit(): void {
    this.loadVariablesFinancieras();
  }

  loadVariablesFinancieras(): void {
    this.variablesFinancierasService.getAll().subscribe(data => {
      this.variablesFinancierasList = data;
    });
  }

  saveVariablesFinancieras(): void {
    if (this.form.valid) {
      const variablesFinancieras: VariablesFinancieras = this.form.value;
      this.variablesFinancierasService.create(variablesFinancieras).subscribe(() => {
        this.loadVariablesFinancieras();
        this.form.reset();
      });
    }
  }

  selectVariable(variable: VariablesFinancieras): void {
    this.selectedVariable = variable;
    this.form.patchValue(variable);
  }

  deleteVariable(id: number): void {
    this.variablesFinancierasService.delete(id).subscribe(() => {
      this.loadVariablesFinancieras();
    });
  }

  resetForm(): void {
    this.selectedVariable = null;
    this.form.reset();
  }
}
