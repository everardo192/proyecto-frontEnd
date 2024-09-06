import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformacionFinanciera } from '../models/informacion-financiera.model';

@Injectable({
  providedIn: 'root'
})
export class InformacionFinancieraService {

  private apiUrl = 'http://localhost:8080/api/informacionfinanciera';

  constructor(private http: HttpClient) { }

  getAllInformacionFinancieras(): Observable<InformacionFinanciera[]> {
    return this.http.get<InformacionFinanciera[]>(this.apiUrl);
  }

  getInformacionFinancieraById(id: number): Observable<InformacionFinanciera> {
    // Usa comillas inversas (backticks) para la interpolación
    return this.http.get<InformacionFinanciera>(`${this.apiUrl}/${id}`);
  }

  saveInformacionFinanciera(informacionFinanciera: InformacionFinanciera): Observable<InformacionFinanciera> {
    return this.http.post<InformacionFinanciera>(this.apiUrl, informacionFinanciera);
  }

  updateInformacionFinanciera(informacionFinanciera: InformacionFinanciera): Observable<InformacionFinanciera> {
    // Usa comillas inversas (backticks) para la interpolación
    return this.http.put<InformacionFinanciera>(`${this.apiUrl}/${informacionFinanciera.id}`, informacionFinanciera);
  }

  deleteInformacionFinanciera(id: number): Observable<void> {
    // Usa comillas inversas (backticks) para la interpolación
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
