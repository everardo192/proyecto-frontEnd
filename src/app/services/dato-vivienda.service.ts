import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatoVivienda } from '../models/dato-vivienda.model'; // Asegúrate de que esta ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class DatoViviendaService {
  private apiUrl = 'http://localhost:8080/dato-vivienda'; // URL del backend

  constructor(private http: HttpClient) { }

  // Obtener todos los datos de vivienda
  getAll(): Observable<DatoVivienda[]> {
    return this.http.get<DatoVivienda[]>(this.apiUrl);
  }

  // Obtener un dato de vivienda por ID
  getById(id: number): Observable<DatoVivienda> {
    return this.http.get<DatoVivienda>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo dato de vivienda
  create(datoVivienda: DatoVivienda): Observable<DatoVivienda> {
    return this.http.post<DatoVivienda>(this.apiUrl, datoVivienda);
  }

  // Actualizar un dato de vivienda existente
  update(id: number, datoVivienda: DatoVivienda): Observable<DatoVivienda> {
    return this.http.put<DatoVivienda>(`${this.apiUrl}/${id}`, datoVivienda);
  }

  // Eliminar un dato de vivienda por ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
