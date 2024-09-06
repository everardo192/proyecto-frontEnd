// models/identificador-reporte.ts
export interface IdentificadorReporte {
  id?: number;
  periodo: string;
  claveEntidad: string;
  reporte: number;
  claveInstitucion?: string;
  claveFederacion?: number;
  claveNivel?: number;
  numeroSubsidiarias?: number;
  descripcion?: string; // Agrega la propiedad aquí
}
