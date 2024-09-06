import { IdentificadorAcreditado } from "./identificador-acreditado.model";

export interface IdentificadorCredito {
  id?: number;
  ideCredito: string;
  ideLineaCredito: string;
  fechaOtorgamiento: string;
  tipoAlta: number;
  tipoCartera: number;
  tipoProducto?: string;
  destinoCredito: number;
  claveSucursal?: string;
  noCuenta?: string;
  noContrato?: string;
  nombreFactorado?: string;
  rfcFactorado?: string;
  noCliente?: string;
  descripcion?: string; // Nueva propiedad
  identificadorAcreditado?: IdentificadorAcreditado; // Nueva propiedad
}
