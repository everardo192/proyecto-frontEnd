import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CondicionFinancieraService } from '../../services/condicion-financiera.service';
//import { CondicionFinanciera } from '../../models/condicion-financiera.model';
import { CondicionFinanciera } from '../../models/condicion-financiera.model';

@Component({
  selector: 'app-condicion-financiera',
  templateUrl: './condicion-financiera.component.html',
  styleUrls: ['./condicion-financiera.component.css']
})
export class CondicionFinancieraComponent implements OnInit {
  condiciones: CondicionFinanciera[] = [];
  condicion: CondicionFinanciera = {} as CondicionFinanciera;
  isEditing = false;

  constructor(
    public router: Router,
    private condicionService: CondicionFinancieraService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCondiciones(); // Cargar todas las condiciones
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.condicionService.getById(+id).subscribe(data => this.condicion = data);
    }
  }

  loadCondiciones(): void {
    this.condicionService.getAll().subscribe(data => this.condiciones = data);
  }

  createCondicion(): void {
    this.condicionService.create(this.condicion).subscribe(() => {
      this.loadCondiciones(); // Recargar condiciones después de crear
      this.condicion = {} as CondicionFinanciera; // Limpiar el formulario
    });
  }

  updateCondicion(): void {
    if (this.condicion.id) {
      this.condicionService.update(this.condicion.id, this.condicion).subscribe(() => {
        this.loadCondiciones(); // Recargar condiciones después de actualizar
        this.condicion = {} as CondicionFinanciera; // Limpiar el formulario
      });
    }
  }

  editCondicion(id: number): void {
    if (id !== undefined) {
      this.condicionService.getById(id).subscribe(data => {
        this.condicion = data;
        this.isEditing = true;
        this.router.navigate(['/condiciones-financieras', id]); // Opcional: Navegar a la vista de edición
      });
    }
  }
  
  deleteCondicion(id: number): void {
    if (id !== undefined) {
      this.condicionService.delete(id).subscribe(() => this.loadCondiciones());
    }
  }
}