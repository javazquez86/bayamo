import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre: string = '';
  apellidos : string = '';

  getNombreApellidos(){
    return this.nombre + ' ' + this.apellidos;
  }
}
