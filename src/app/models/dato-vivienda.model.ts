import { IdentificadorCredito } from "./identificador-credito.model";

export interface DatoVivienda {
credito: any;
  id: number;                      // Auto-generado en la base de datos
  valorVivienda: number;
  valorInmueble: number;
  noAvaluo: number;
  loan: number;
  identificadorCreditoId?: number | null;   // Relación opcional
}
