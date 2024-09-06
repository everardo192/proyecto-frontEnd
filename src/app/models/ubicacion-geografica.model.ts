export class UbicacionGeograficaActividadEconomica {
  id?: number;  // Opcional
  localidadDestino!: string;  // Requerido
  municipioDestino!: number;  // Requerido
  estadoDestino!: number;     // Requerido
  actEconomicaDestino!: string;  // Requerido
  identificadorCredito?: {  // Opcional
    ideCredito?: number;  // Opcional
    ideLineaCredito?: number;  // Opcional
  };
}
