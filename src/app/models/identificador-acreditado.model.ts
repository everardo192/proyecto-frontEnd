export interface IdentificadorAcreditado {
    noCliente: string;
    tipoCliente: number;
    nombres: string;
    aPaterno: string;
    aMaterno: string;
    pJuridica: number;
    grupoRiesgo?: string;
    actEconomicaAcreditado?: string;
    nacionalidad: number;
    fechaNacimiento: string;
    rfc: string;
    curp: string;
    genero: number;
    calle: string;
    noExterior: string;
    colonia: string;
    cp: number;
    localidad: string;
    estado: number;
    municipio: number;
    pais: number;
    tipoAcreditado: number;
    consultasSIC?: number;
    ingresos: number;
    tamaño?: number;
  }