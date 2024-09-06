
//import { IdentificadorReporte } from "./identificador-reporte.model";

export interface InformacionFinanciera {
  id?: number;  // Campo opcional para la creación
  concepto: string;
  moneda: string;
  dato: number;
  reporte?: number;  // Opcional
  tipoCartera?: string;
  tipoSaldo?: string;
  tipoMovimiento?: string;
  descripcion?: string;
  identificadorReporte?: string;  // Opcional
}
