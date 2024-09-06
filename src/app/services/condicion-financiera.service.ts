import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CondicionFinanciera } from '../models/condicion-financiera.model';

@Injectable({
  providedIn: 'root'
})
export class CondicionFinancieraService {
  private apiUrl = 'http://localhost:8080/api/condiciones-financieras';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CondicionFinanciera[]> {
    return this.http.get<CondicionFinanciera[]>(this.apiUrl);
  }

  getById(id: number): Observable<CondicionFinanciera> {
    return this.http.get<CondicionFinanciera>(`${this.apiUrl}/${id}`);
  }

  create(condicion: CondicionFinanciera): Observable<CondicionFinanciera> {
    return this.http.post<CondicionFinanciera>(this.apiUrl, condicion);
  }

  update(id: number, condicion: CondicionFinanciera): Observable<CondicionFinanciera> {
    return this.http.put<CondicionFinanciera>(`${this.apiUrl}/${id}`, condicion);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}