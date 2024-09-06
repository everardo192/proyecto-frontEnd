import { Component, OnInit } from '@angular/core';
import { IdentificadorCreditoService } from '../../services/identificador-credito.service';
import { IdentificadorCredito } from '../../models/identificador-credito.model';

@Component({
  selector: 'app-identificador-credito',
  templateUrl: './identificador-credito.component.html',
  styleUrls: ['./identificador-credito.component.css']
})
export class IdentificadorCreditoComponent implements OnInit {
  identificadorCreditos: IdentificadorCredito[] = [];
  identificadorCredito: IdentificadorCredito = {
    ideCredito: '',
    ideLineaCredito: '',
    fechaOtorgamiento: '',
    tipoAlta: 0,
    tipoCartera: 0,
    tipoProducto: '',
    destinoCredito: 0,
    claveSucursal: '',
    noCuenta: '',
    noContrato: '',
    nombreFactorado: '',
    rfcFactorado: '',
    noCliente: '',
    identificadorAcreditado: undefined
  };
  isUpdateMode: boolean = false;

  constructor(private identificadorCreditoService: IdentificadorCreditoService) {}

  ngOnInit(): void {
    this.getIdentificadorCreditos();
  }

  getIdentificadorCreditos(): void {
    this.identificadorCreditoService.getAllIdentificadorCreditos().subscribe((data: IdentificadorCredito[]) => {
      this.identificadorCreditos = data;
    });
  }

  saveOrUpdateIdentificadorCredito(): void {
    if (this.isUpdateMode && this.identificadorCredito.id) {
      this.identificadorCreditoService.updateIdentificadorCredito(this.identificadorCredito.id, this.identificadorCredito).subscribe(() => {
        this.getIdentificadorCreditos();
        this.resetForm();
      });
    } else {
      this.identificadorCreditoService.saveIdentificadorCredito(this.identificadorCredito).subscribe(() => {
        this.getIdentificadorCreditos();
        this.resetForm();
      });
    }
  }

  editIdentificadorCredito(credito: IdentificadorCredito): void {
    this.identificadorCredito = { ...credito };
    this.isUpdateMode = true;
  }

  deleteIdentificadorCredito(id: number): void {
    this.identificadorCreditoService.deleteIdentificadorCredito(id).subscribe(() => {
      this.getIdentificadorCreditos();
    });
  }

  resetForm(): void {
    this.identificadorCredito = {
      ideCredito: '',
      ideLineaCredito: '',
      fechaOtorgamiento: '',
      tipoAlta: 0,
      tipoCartera: 0,
      tipoProducto: '',
      destinoCredito: 0,
      claveSucursal: '',
      noCuenta: '',
      noContrato: '',
      nombreFactorado: '',
      rfcFactorado: '',
      noCliente: '',
      identificadorAcreditado: undefined
    };
    this.isUpdateMode = false;
  }
}