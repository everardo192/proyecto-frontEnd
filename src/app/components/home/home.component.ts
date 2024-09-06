import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSidebarExpanded = false; // Bandera para controlar si el sidebar está expandido

  // Función para expandir/contraer el sidebar al dar click
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  // Función para expandir el sidebar al pasar el cursor
  expandSidebar() {
    if (!this.isSidebarExpanded) {
      this.isSidebarExpanded = true;
    }
  }

  // Función para contraer el sidebar al quitar el cursor
  collapseSidebar() {
    if (this.isSidebarExpanded) {
      this.isSidebarExpanded = false;
    }
  }
}
