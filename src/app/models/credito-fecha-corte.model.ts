export interface CreditoFechaCorte {
    id?: number;
    fechaCorte: string;
    montoInsoluto: number;
    saldoInsoluto: number;
    pagoAmortizacion: number;
    pagoIntereses: number;
    pagoCapital: number;
    totalPagado: number;
    identificadorCredito?: IdentificadorCredito;
  }
  
  export interface IdentificadorCredito {
    ideCredito: string;
    ideLineaCredito: string;
  }