import { Component } from '@angular/core';

@Component({
  selector: 'app-avioncito',
  templateUrl: './avioncito.component.html',
  styleUrls: ['./avioncito.component.scss']
})
export class AvioncitoComponent {
  tipo = 'info';
  seleccionada: string = '';

  ruedas = [
    {
      identificador: 'delantera-derecha',
      marca: 'michelin',
      precio: 100,
    },
    {
      identificador: 'delantera-izquierda',
      marca: 'Kumho',
      precio: 200,
    },
    {
      identificador: 'trasera-derecha',
      marca: 'Continental',
      precio: 150,
    },
    {
      identificador: 'trasera-izquierda',
      marca: 'Pirelli',
      precio: 600,
    }
  ];

  evaluacion!: string;

  recibirSeleccionRueda(parte: any){
    this.seleccionada = parte.identificador + ' (' + parte.marca + ') ' + parte.precio;
    this.evaluacion = parseFloat(parte.precio) > 150 ? 'Expensive' : 'Cheap';
  }

}
