import { Component, OnInit } from '@angular/core';
import { IdentificadorInversionesService } from '../../services/identificador-inversiones.service';


@Component({
  selector: 'app-identificador-inversiones',
  templateUrl: './identificador-inversiones.component.html',
  styleUrl: './identificador-inversiones.component.css'
})
export class IdentificadorInversionesComponent implements OnInit {

  inversiones: any[] = [];

  constructor(private inversionesService: IdentificadorInversionesService) { }

  ngOnInit(): void {
    this.loadInversiones();
  }

  loadInversiones(): void {
    this.inversionesService.getAll().subscribe(data => {
      this.inversiones = data;
    });
  }

  deleteInversion(id: number): void {
    this.inversionesService.delete(id).subscribe(() => {
      this.loadInversiones();
    });
  }
}
