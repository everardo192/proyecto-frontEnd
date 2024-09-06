export interface IdentificadorInversiones {
    id?: number;
    entidadInversion: string;
    emisora: string;
    serie?: string;
    tipoValor?: string;
    formaAdquisicion: number;
    tipoInversion: number;
    tipoInstrumento: number;
    clasificacionContable?: string;
    fechaContratacion?: string;
    fechaVencimiento?: string;
    identificadorReporte?: {
      periodo?: string;
      claveEntidad?: string;
      reporte?: string;
    };
  }