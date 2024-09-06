import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdentificadorAcreditadoService } from '../../services/identificador-acreditado.service';
import { IdentificadorAcreditado } from '../../models/identificador-acreditado.model';

@Component({
  selector: 'app-identificador-acreditado',
  templateUrl: './identificador-acreditado.component.html',
  styleUrls: ['./identificador-acreditado.component.css']
})
export class IdentificadorAcreditadoComponent implements OnInit {
  identificadorAcreditadoForm: FormGroup;
  identificadorAcreditadoList: IdentificadorAcreditado[] = [];
  selectedIdentificadorAcreditado: IdentificadorAcreditado | null = null;

  constructor (
    private fb: FormBuilder,
    private identificadorAcreditadoService: IdentificadorAcreditadoService
  ) {
    this.identificadorAcreditadoForm = this.fb.group({
      noCliente: ['', Validators.required],
      tipoCliente: ['', Validators.required],
      nombres: ['', Validators.required],
      aPaterno: ['', Validators.required],
      aMaterno: ['', Validators.required],
      pJuridica: ['', Validators.required],
      grupoRiesgo: [''],
      actEconomicaAcreditado: [''],
      nacionalidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      rfc: ['', Validators.required],
      curp: ['', Validators.required],
      genero: ['', Validators.required],
      calle: ['', Validators.required],
      noExterior: ['', Validators.required],
      colonia: ['', Validators.required],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      estado: ['', Validators.required],
      municipio: ['', Validators.required],
      pais: ['', Validators.required],
      tipoAcreditado: ['', Validators.required],
      consultasSIC: [''],
      ingresos: ['', Validators.required],
      tamaño: ['']
    });
  }

  ngOnInit(): void {
    this.loadIdentificadores();
  }

  loadIdentificadores(): void {
    this.identificadorAcreditadoService.getAllIdentificadores().subscribe(data => {
      this.identificadorAcreditadoList = data;
    });
  }

  onSubmit(): void {
    if (this.identificadorAcreditadoForm.valid) {
      const identificadorAcreditado: IdentificadorAcreditado = this.identificadorAcreditadoForm.value;
      if (this.selectedIdentificadorAcreditado) {
        this.identificadorAcreditadoService.createIdentificador(identificadorAcreditado).subscribe(response => {
          console.log('Identificador Acreditado guardado', response);
          this.loadIdentificadores();
          this.identificadorAcreditadoForm.reset();
          this.selectedIdentificadorAcreditado = null;
        });
      } else {
        this.identificadorAcreditadoService.createIdentificador(identificadorAcreditado).subscribe(response => {
          console.log('Identificador Acreditado creado', response);
          this.loadIdentificadores();
          this.identificadorAcreditadoForm.reset();
        });
      }
    }
  }

  onEdit(identificadorAcreditado: IdentificadorAcreditado): void {
    this.selectedIdentificadorAcreditado = identificadorAcreditado;
    this.identificadorAcreditadoForm.patchValue(identificadorAcreditado);
  }

  onDelete(noCliente: string): void {
    this.identificadorAcreditadoService.deleteIdentificador(noCliente).subscribe(() => {
      console.log('Identificador Acreditado eliminado');
      this.loadIdentificadores();
    });
  }
}