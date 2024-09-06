import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentificadorCredito } from '../models/identificador-credito.model';

@Injectable({
  providedIn: 'root'
})
export class IdentificadorCreditoService {
  private apiUrl = 'http://localhost:8080/api/identificadorcredito';

  constructor(private http: HttpClient) {}

  getAllIdentificadorCreditos(): Observable<IdentificadorCredito[]> {
    return this.http.get<IdentificadorCredito[]>(this.apiUrl);
  }

  getIdentificadorCreditoById(id: number): Observable<IdentificadorCredito> {
    return this.http.get<IdentificadorCredito>(`${this.apiUrl}/${id}`);
  }

  saveIdentificadorCredito(identificadorCredito: IdentificadorCredito): Observable<IdentificadorCredito> {
    return this.http.post<IdentificadorCredito>(this.apiUrl, identificadorCredito);
  }

  updateIdentificadorCredito(id: number, identificadorCredito: IdentificadorCredito): Observable<IdentificadorCredito> {
    return this.http.put<IdentificadorCredito>(`${this.apiUrl}/${id}`, identificadorCredito);
  }

  deleteIdentificadorCredito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}