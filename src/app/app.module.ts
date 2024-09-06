import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IdentificadorReporteComponent } from './components/identificador-reporte/identificador-reporte.component';
import { UploadDownloadComponent } from './components/upload-download/upload-download.component';
import { UbicacionGeograficaActividadEconomicaComponent } from './components/ubicacion-geografica/ubicacion-geografica.component';
import { IdentificadorCreditoComponent } from './components/identificador-credito/identificador-credito.component';
import { IdentificadorInversionesComponent } from './components/identificador-inversiones/identificador-inversiones.component';
import { CondicionFinancieraComponent } from './components/condicion-financiera/condicion-financiera.component';
import { IdentificadorAcreditadoComponent } from './components/identificador-acreditado/identificador-acreditado.component';
import { CreditoComponent } from './components/credito/credito.component';
import { CreditoFechaCorteComponent } from './components/credito-fecha-corte/credito-fecha-corte.component';
import { DatoViviendaComponent } from './components/dato-vivienda/dato-vivienda.component';
import { InformacionFinancieraComponent } from './components/informacion-financiera/informacion-financiera.component';
import { VariablesFinancierasComponent } from './components/variables-financieras/variables-financieras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentificadorReporteComponent,
    UploadDownloadComponent,
    UbicacionGeograficaActividadEconomicaComponent,
    IdentificadorCreditoComponent,
    IdentificadorInversionesComponent,
    CondicionFinancieraComponent,
    IdentificadorAcreditadoComponent, // Declara el componente aquí
    CreditoComponent,
    CreditoFechaCorteComponent,
    DatoViviendaComponent,
    InformacionFinancieraComponent,
    VariablesFinancierasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  // Asegúrate de incluir ReactiveFormsModule aquí
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
