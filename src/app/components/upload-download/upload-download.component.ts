import { Component } from '@angular/core';
import { FileUploadDownloadService } from '../../services/file-upload-download.service';
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-upload-download',
  //standalone: true,
  //imports: [],
  templateUrl: './upload-download.component.html',
  styleUrl: './upload-download.component.css'
})
export class UploadDownloadComponent {

  selectedFile: File | null = null;

  constructor(private fileService: FileUploadDownloadService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.fileService.uploadFile(formData).subscribe(response => {
        console.log('Archivo subido con éxito');
      });
    }
  }

  downloadFile(): void {
    this.fileService.downloadFile().subscribe(data => {
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      saveAs(blob, 'reportes.xlsx');
    });
  }
}
