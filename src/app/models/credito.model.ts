import { IdentificadorAcreditado } from "./identificador-acreditado.model";

export interface Credito {
    id?: number;
    tipoCredito: string;
    montoOriginal: number;
    saldoActual: number;
    tasaInteres: number;
    acreditado?: IdentificadorAcreditado; // Relación con IdentificadorAcreditado
  }