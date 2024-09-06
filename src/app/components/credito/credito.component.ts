// src/app/components/credito/credito.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditoService } from '../../services/credito.service';
//import { Credito } from '../../models/credito.model';
import { Credito } from '../../models/credito.model';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {
  creditos: Credito[] = [];
  creditoForm: FormGroup;
  selectedCredito?: Credito;

  constructor(private creditoService: CreditoService, private fb: FormBuilder) {
    this.creditoForm = this.fb.group({
      tipoCredito: ['', Validators.required],
      montoOriginal: ['', Validators.required],
      saldoActual: ['', Validators.required],
      tasaInteres: ['', Validators.required],
      acreditado: ['']
    });
  }

  ngOnInit(): void {
    this.loadCreditos();
  }

  loadCreditos(): void {
    this.creditoService.getAllCreditos().subscribe(data => {
      this.creditos = data;
    });
  }

  onSubmit(): void {
    if (this.creditoForm.valid) {
      const credito: Credito = this.creditoForm.value;
      if (this.selectedCredito) {
        this.creditoService.updateCredito(this.selectedCredito.id!, credito).subscribe(() => {
          this.loadCreditos();
        });
      } else {
        this.creditoService.createCredito(credito).subscribe(() => {
          this.loadCreditos();
        });
      }
      this.creditoForm.reset();
      this.selectedCredito = undefined;
    }
  }

  onEdit(credito: Credito): void {
    this.selectedCredito = credito;
    this.creditoForm.patchValue(credito);
  }

  onDelete(id: number): void {
    this.creditoService.deleteCredito(id).subscribe(() => {
      this.loadCreditos();
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.creditoService.importFromExcel(file).subscribe(() => {
        this.loadCreditos();
      });
    }
  }

  downloadExcel(): void {
    this.creditoService.exportToExcel().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'creditos.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}