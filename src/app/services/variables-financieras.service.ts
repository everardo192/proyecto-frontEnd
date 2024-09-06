// src/app/services/variables-financieras.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VariablesFinancieras } from '../models/variables-financieras.model';

@Injectable({
  providedIn: 'root'
})
export class VariablesFinancierasService {

  private apiUrl = 'http://localhost:8080/api/variablesfinancieras';

  constructor(private http: HttpClient) { }

  getAll(): Observable<VariablesFinancieras[]> {
    return this.http.get<VariablesFinancieras[]>(this.apiUrl);
  }

  create(variable: VariablesFinancieras): Observable<VariablesFinancieras> {
    return this.http.post<VariablesFinancieras>(this.apiUrl, variable);
  }

  update(id: number, variable: VariablesFinancieras): Observable<VariablesFinancieras> {
    return this.http.put<VariablesFinancieras>(`${this.apiUrl}/${id}`, variable);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
