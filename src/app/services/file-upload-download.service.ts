import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadDownloadService {
  private uploadUrl = 'http://localhost:8080/api/upload';
  private downloadUrl = 'http://localhost:8080/api/download';

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(this.uploadUrl, formData);
  }

  downloadFile(): Observable<Blob> {
    return this.http.get(this.downloadUrl, {responseType: 'blob'});
  }
}
