import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IdentificadorInversiones } from '../models/identificador-inversiones.model';


@Injectable({
  providedIn: 'root'
})
export class IdentificadorInversionesService {

  private baseUrl  = 'http://localhost:8080/api/identificadorinversiones';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IdentificadorInversiones[]> {
    return this.http.get<IdentificadorInversiones[]>(this.baseUrl);
  }

  getById(id: number): Observable<IdentificadorInversiones> {
    return this.http.get<IdentificadorInversiones>(`${this.baseUrl}/${id}`);
  }

  create(identificadorInversiones: IdentificadorInversiones): Observable<IdentificadorInversiones> {
    return this.http.post<IdentificadorInversiones>(this.baseUrl, identificadorInversiones);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
