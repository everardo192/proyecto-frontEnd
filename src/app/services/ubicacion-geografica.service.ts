import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UbicacionGeograficaActividadEconomica } from '../models/ubicacion-geografica.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionGeograficaActividadEconomicaService {
  private apiUrl = 'http://localhost:8080/ubicacion-geografica-actividad-economica';

  constructor(private http: HttpClient) {}

  getAll(): Observable<UbicacionGeograficaActividadEconomica[]> {
    return this.http.get<UbicacionGeograficaActividadEconomica[]>(this.apiUrl);
  }

  getById(id: number): Observable<UbicacionGeograficaActividadEconomica> {
    return this.http.get<UbicacionGeograficaActividadEconomica>(`${this.apiUrl}/${id}`);
  }

  save(ubicacion: UbicacionGeograficaActividadEconomica): Observable<UbicacionGeograficaActividadEconomica> {
    return this.http.post<UbicacionGeograficaActividadEconomica>(this.apiUrl, ubicacion);
  }

  update(id: number, ubicacion: UbicacionGeograficaActividadEconomica): Observable<UbicacionGeograficaActividadEconomica> {
    return this.http.put<UbicacionGeograficaActividadEconomica>(`${this.apiUrl}/${id}`, ubicacion);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

