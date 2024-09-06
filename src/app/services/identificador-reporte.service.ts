// identificador-reporte.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentificadorReporte } from '../models/identificador-reporte.model';

@Injectable({
  providedIn: 'root'
})
export class IdentificadorReporteService {
  private apiUrl = 'http://localhost:8080/api/identificadorreporte';

  constructor(private http: HttpClient) {}

  // Método para crear un nuevo reporte
  create(identificadorReporte: IdentificadorReporte): Observable<IdentificadorReporte> {
    return this.http.post<IdentificadorReporte>(this.apiUrl, identificadorReporte);
  }

  // Obtener todos los reportes
  getAllIdentificadorReportes(): Observable<IdentificadorReporte[]> {
    return this.http.get<IdentificadorReporte[]>(this.apiUrl);
  }

  // Obtener un reporte por ID
  getIdentificadorReporteById(id: number): Observable<IdentificadorReporte> {
    return this.http.get<IdentificadorReporte>(`${this.apiUrl}/${id}`);
  }

  // Guardar un reporte (podría considerarse como crear/actualizar)
  saveIdentificadorReporte(identificadorReporte: IdentificadorReporte): Observable<IdentificadorReporte> {
    return this.http.post<IdentificadorReporte>(this.apiUrl, identificadorReporte);
  }

  // Actualizar un reporte por ID
  updateIdentificadorReporte(id: number, identificadorReporte: IdentificadorReporte): Observable<IdentificadorReporte> {
    return this.http.put<IdentificadorReporte>(`${this.apiUrl}/${id}`, identificadorReporte);
  }

  // Eliminar un reporte por ID
  deleteIdentificadorReporte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
