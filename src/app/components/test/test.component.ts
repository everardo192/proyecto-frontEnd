import { Component } from '@angular/core';
import { IdentificadorReporteService } from '../../services/identificador-reporte.service';
import { InformacionFinancieraService } from '../../services/informacion-financiera.service';
import { IdentificadorInversionesService } from '../../services/identificador-inversiones.service';
import { VariablesFinancierasService } from '../../services/variables-financieras.service';
import { IdentificadorReporte } from '../../models/identificador-reporte.model';
import { InformacionFinanciera } from '../../models/informacion-financiera.model';
import { IdentificadorInversiones } from '../../models/identificador-inversiones.model';
import { VariablesFinancieras } from '../../models/variables-financieras.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  formVisible = false;
  secondFormVisible = false;
  thirdFormVisible = false;
  fourthFormVisible = false;
  fifthFormVisible = false;

  identificadorReportes: IdentificadorReporte[] = [];

  constructor(
    private identificadorReporteService: IdentificadorReporteService,
    private informacionFinancieraService: InformacionFinancieraService
  ) {}

  toggleForm() {
    this.formVisible = !this.formVisible;
  }
  toggleSecondForm() {
    this.secondFormVisible = !this.secondFormVisible;
  }

  toggleThirdForm() {
    this.thirdFormVisible = !this.thirdFormVisible;
  }
  toggleFourthForm() {
    this.fourthFormVisible = !this.fourthFormVisible;
  }
  toggleFifthForm() {
    this.fifthFormVisible = !this.fifthFormVisible;
  }

  saveForm(formData: any, formType: string) {
    const identificadorReporte: IdentificadorReporte = {
      id: 0,
      periodo: formData.periodo,
      claveEntidad: formData.claveEntidad,
      reporte: formData.reporte,
      claveInstitucion: formData.claveInstitucion,
      claveFederacion: formData.claveFederacion,
      claveNivel: formData.claveNivel,
      numeroSubsidiarias: formData.numeroSubsidiarias
    };

    // Enviar el identificadorReporte al servicio
    this.identificadorReporteService.create(identificadorReporte).subscribe((reporte: any) => {
      const informacionFinanciera: InformacionFinanciera = {
        id: 0,
        concepto: formData.concepto1 || formData.concepto || formData.conceptoA0417,
        moneda: formData.moneda1 || formData.moneda || formData.monedaA0417,
        dato: formData.dato1 || formData.dato || formData.datoA0417,
        identificadorReporte: reporte
      };

      if (formType === 'Serie R01 Catálogo mínimo') {
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(() => {
          alert('Datos guardados correctamente en Serie R01 Catálogo mínimo');
        });
      } else if (formType === 'Serie R02 Reporte de Créditos') {
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(() => {
          alert('Datos guardados correctamente en Serie R02 Reporte de Créditos');
        });
      } else if (formType === 'Serie R04 Cartera de crédito') {
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(() => {
          alert('Datos guardados correctamente en Serie R04 Cartera de crédito');
        });
      } else if (formType === 'Serie A-0417 Calificación de la cartera de crédito') {
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(() => {
          alert('Datos guardados correctamente en A-0417 Calificación de la cartera de crédito');
        });
      } else if (formType === 'A-0419 Movimientos en la estimación preventiva para riesgos crediticios') {
        this.informacionFinancieraService.saveInformacionFinanciera(informacionFinanciera).subscribe(() => {
          alert('Datos guardados correctamente en A-0419 Movimientos en la estimación preventiva para riesgos crediticios');
        });
      }
    });
  }
}
