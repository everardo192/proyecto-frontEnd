// src/app/models/variables-financieras.model.ts

export interface VariablesFinancieras {
  id?: number;
  noTitulo: number;
  costoAdquisitivo: number;
  tasaInt: number;
  grupoRiesgo: number;
  valoracionDirecta: number;
  resultadoValuacion: number;
  identificadorCredito?: string; // Campo opcional
  identificadorLineaCredito?: string; // Campo opcional
}
