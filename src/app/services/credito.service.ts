import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credito } from '../models/credito.model';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private apiUrl = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) {}

  getAllCreditos(): Observable<Credito[]> {
    return this.http.get<Credito[]>(this.apiUrl);
  }

  getCreditoById(id: number): Observable<Credito> {
    return this.http.get<Credito>(`${this.apiUrl}/${id}`);
  }

  createCredito(credito: Credito): Observable<Credito> {
    return this.http.post<Credito>(this.apiUrl, credito);
  }

  updateCredito(id: number, credito: Credito): Observable<Credito> {
    return this.http.put<Credito>(`${this.apiUrl}/${id}`, credito);
  }

  deleteCredito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  exportToExcel(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export/excel`, { responseType: 'blob' });
  }

  importFromExcel(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    // Corregir la URL y quitar el paréntesis extra
    return this.http.post<void>(`${this.apiUrl}/import/excel`, formData);
  }
}
