import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentificadorAcreditado } from '../models/identificador-acreditado.model';

@Injectable({
  providedIn: 'root'
})
export class IdentificadorAcreditadoService {
  private apiUrl = 'http://localhost:8080/api/identificadoracreditado';

  constructor(private http: HttpClient) {}

  getAllIdentificadores(): Observable<IdentificadorAcreditado[]> {
    return this.http.get<IdentificadorAcreditado[]>(this.apiUrl);
  }

  getIdentificadorByNoCliente(noCliente: string): Observable<IdentificadorAcreditado> {
    return this.http.get<IdentificadorAcreditado>(`${this.apiUrl}/${noCliente}`);
  }

  createIdentificador(identificador: IdentificadorAcreditado): Observable<IdentificadorAcreditado> {
    return this.http.post<IdentificadorAcreditado>(this.apiUrl, identificador);
  }

  deleteIdentificador(noCliente: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${noCliente}`);
  }
}