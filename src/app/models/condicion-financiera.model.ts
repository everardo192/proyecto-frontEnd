export interface CondicionFinanciera {
    id?: number;
    montoPesos: number;
    montoMonedaOrigen: number;
    fechaDisposicion: string;
    fechaVencimiento: string;
    formaAdquisicion: string;
    tasaInteres: number;
    diferenciaTasa: number;
    operacionTasa: number;
    tipoMoneda: number;
    periodoPagosCapital: number;
    periodoPagosInteres: number;
    periodoFacturacion: number;
    comisionATasa: number;
    comisionAMonto: number;
    comisionDTasa: number;
    comisionDMonto: number;
    identificadorCredito?: any; // Define según sea necesario
  }