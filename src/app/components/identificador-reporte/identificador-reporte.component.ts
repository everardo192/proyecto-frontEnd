import { Component, OnInit } from '@angular/core';
import { IdentificadorReporteService } from '../../services/identificador-reporte.service';
import { IdentificadorReporte } from '../../models/identificador-reporte.model';

@Component({
  selector: 'app-identificador-reporte',
  templateUrl: './identificador-reporte.component.html',
  styleUrls: ['./identificador-reporte.component.css']
})
export class IdentificadorReporteComponent implements OnInit {
  identificadorReportes: IdentificadorReporte[] = [];
  
  // Inicializar identificadorReporte con valores por defecto
  identificadorReporte: IdentificadorReporte = {
    periodo: '',
    claveEntidad: '',
    reporte: 0,
    claveInstitucion: '',
    claveFederacion: undefined,
    claveNivel: undefined,
    numeroSubsidiarias: undefined,
  };
  
  isUpdateMode: boolean = false;

  constructor(private identificadorReporteService: IdentificadorReporteService) {}

  ngOnInit(): void {
    this.getIdentificadorReportes();
  }

  getIdentificadorReportes(): void {
    this.identificadorReporteService.getAllIdentificadorReportes().subscribe((data: IdentificadorReporte[]) => {
      this.identificadorReportes = data;
    });
  }

  saveOrUpdateIdentificadorReporte(): void {
    if (this.isUpdateMode && this.identificadorReporte.id) {
      // Actualizar el identificadorReporte existente
      this.identificadorReporteService.updateIdentificadorReporte(this.identificadorReporte.id, this.identificadorReporte).subscribe(() => {
        this.getIdentificadorReportes();
        this.resetForm();
      });
    } else {
      // Guardar un nuevo identificadorReporte
      this.identificadorReporteService.saveIdentificadorReporte(this.identificadorReporte).subscribe(() => {
        this.getIdentificadorReportes();
        this.resetForm();
      });
    }
  }

  editIdentificadorReporte(reporte: IdentificadorReporte): void {
    // Editar el identificadorReporte seleccionado
    this.identificadorReporte = { ...reporte };
    this.isUpdateMode = true;
  }

  deleteIdentificadorReporte(id: number): void {
    this.identificadorReporteService.deleteIdentificadorReporte(id).subscribe(() => {
      this.getIdentificadorReportes();
    });
  }

  resetForm(): void {
    // Reiniciar el formulario con valores por defecto
    this.identificadorReporte = {
      periodo: '',
      claveEntidad: '',
      reporte: 0,
      claveInstitucion: '',
      claveFederacion: undefined,
      claveNivel: undefined,
      numeroSubsidiarias: undefined,
    };
    this.isUpdateMode = false;
  }
}
