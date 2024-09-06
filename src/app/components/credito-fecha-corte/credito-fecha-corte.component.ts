import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditoFechaCorteService } from '../../services/credito-fecha-corte.service';
import { CreditoFechaCorte } from '../../models/credito-fecha-corte.model';

@Component({
  selector: 'app-credito-fecha-corte',
  templateUrl: './credito-fecha-corte.component.html',
  styleUrls: ['./credito-fecha-corte.component.css']
})
export class CreditoFechaCorteComponent implements OnInit {
  creditoFechaCorteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditoFechaCorteService: CreditoFechaCorteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicializar el formulario aquí
    this.creditoFechaCorteForm = this.fb.group({
      fechaCorte: ['', Validators.required],
      montoInsoluto: ['', Validators.required],
      saldoInsoluto: ['', Validators.required],
      pagoAmortizacion: ['', Validators.required],
      pagoIntereses: ['', Validators.required],
      pagoCapital: ['', Validators.required],
      totalPagado: ['', Validators.required],
      identificadorCredito: this.fb.group({
        ideCredito: [''],
        ideLineaCredito: ['']
      })
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.creditoFechaCorteService.getById(id).subscribe(
        data => this.creditoFechaCorteForm.patchValue(data),
        error => console.error(error)
      );
    }
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.creditoFechaCorteService.update(id, this.creditoFechaCorteForm.value).subscribe(
        () => this.router.navigate(['/credito-fecha-corte']),
        error => console.error(error)
      );
    } else {
      this.creditoFechaCorteService.create(this.creditoFechaCorteForm.value).subscribe(
        () => this.router.navigate(['/credito-fecha-corte']),
        error => console.error(error)
      );
    }
  }

  onDelete() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.creditoFechaCorteService.delete(id).subscribe(
        () => this.router.navigate(['/credito-fecha-corte']),
        error => console.error(error)
      );
    }
  }

  onExport() {
    this.creditoFechaCorteService.exportToExcel().subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'credito_fecha_corte.xlsx';
        a.click();
      },
      error => console.error(error)
    );
  }

  onImport(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.creditoFechaCorteService.importFromExcel(file).subscribe(
        () => console.log('Archivo importado exitosamente'),
        error => console.error(error)
      );
    }
  }
}