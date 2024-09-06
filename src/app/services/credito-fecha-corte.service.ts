import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditoFechaCorte } from '../models/credito-fecha-corte.model';

@Injectable({
  providedIn: 'root'
})
export class CreditoFechaCorteService {
  private baseUrl = 'http://localhost:8080/api/credito-fecha-corte';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CreditoFechaCorte[]> {
    return this.http.get<CreditoFechaCorte[]>(`${this.baseUrl}`);
  }

  getById(id: number): Observable<CreditoFechaCorte> {
    return this.http.get<CreditoFechaCorte>(`${this.baseUrl}/${id}`);
  }

  create(creditoFechaCorte: CreditoFechaCorte): Observable<CreditoFechaCorte> {
    return this.http.post<CreditoFechaCorte>(`${this.baseUrl}`, creditoFechaCorte);
  }

  update(id: number, creditoFechaCorte: CreditoFechaCorte): Observable<CreditoFechaCorte> {
    return this.http.put<CreditoFechaCorte>(`${this.baseUrl}/${id}`, creditoFechaCorte);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  exportToExcel(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/export`, { responseType: 'blob' });
  }

  importFromExcel(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<void>(`${this.baseUrl}/import`, formData);
  }
}
