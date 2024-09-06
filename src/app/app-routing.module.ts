import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import {HomeComponent} from '../app/components/home/home.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { BitacoraReporteComponent } from './components/bitacora-reporte/bitacora-reporte.component';
import { AdminReporteComponent } from './components/admin-reporte/admin-reporte.component';
import { UsersModuleComponent } from './components/users-module/users-module.component';
import { IdentificadorReporteComponent } from './components/identificador-reporte/identificador-reporte.component';
import { UploadDownloadComponent } from './components/upload-download/upload-download.component';
//import { UbicacionGeograficaComponent } from './components/ubicacion-geografica/ubicacion-geografica.component';
import { UbicacionGeograficaActividadEconomicaComponent } from './components/ubicacion-geografica/ubicacion-geografica.component';
//import { VerDetallesComponent } from './components/ver-detalles/ver-detalles.component';
import { IdentificadorCreditoComponent } from './components/identificador-credito/identificador-credito.component';
import { IdentificadorInversionesComponent } from './components/identificador-inversiones/identificador-inversiones.component';
import { TestComponent } from './components/test/test.component';
import { CondicionFinancieraComponent } from './components/condicion-financiera/condicion-financiera.component';
import { IdentificadorAcreditadoComponent } from './components/identificador-acreditado/identificador-acreditado.component';
import { CreditoComponent } from './components/credito/credito.component';
import { CreditoFechaCorteComponent } from './components/credito-fecha-corte/credito-fecha-corte.component';
import { DatoViviendaComponent } from './components/dato-vivienda/dato-vivienda.component';
import { InformacionFinancieraComponent } from './components/informacion-financiera/informacion-financiera.component';
import { VariablesFinancierasComponent } from './components/variables-financieras/variables-financieras.component';



//Declarar las rutas de los componentes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto para el Home
  { path: '', redirectTo: '/identificador-reporte', pathMatch: 'full' },
  { path: '', redirectTo: '/ubicaciones', pathMatch: 'full' },
  { path: '', redirectTo: '/informacion-financiera', pathMatch: 'full'},
  { path: '', redirectTo: '/identificador-credito', pathMatch: 'full'},
  { path: '', redirectTo: '/identificador-inversiones', pathMatch: 'full'},
  { path: 'generateReport', component: GenerateReportComponent },
  { path: 'bitacoraReport', component: BitacoraReporteComponent },
  { path: 'adminReporte', component: AdminReporteComponent },
  { path: 'usersModule', component: UsersModuleComponent },
  { path: 'identificador-reporte', component: IdentificadorReporteComponent },
  { path: 'upload-download', component: UploadDownloadComponent },
  { path: 'ubicacion-geografica', component: UbicacionGeograficaActividadEconomicaComponent},
  //{ path: 'ver-detalles', component: VerDetallesComponent},
  { path: 'identificador-credito', component: IdentificadorCreditoComponent},
  { path: 'identificador-inversiones', component: IdentificadorInversionesComponent},
  { path: 'test', component: TestComponent },
  { path: 'condicion-financiera', component: CondicionFinancieraComponent},
  { path: 'identificador-acreditado', component: IdentificadorAcreditadoComponent},
  { path: 'credito', component: CreditoComponent},
  { path: 'credito-fecha-corte', component: CreditoFechaCorteComponent},
  { path: 'dato-vivienda', component: DatoViviendaComponent},
  { path: 'informacion-financiera', component: InformacionFinancieraComponent},
  { path: 'variables-financieras', component: VariablesFinancierasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ],
  declarations: [
    
  ]
})
export class AppRoutingModule { } 