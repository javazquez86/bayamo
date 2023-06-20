import { Component,ViewChild } from '@angular/core';
import { RuedaComponent } from './rueda/rueda.component';
import { PuertaComponent } from './puerta/puerta.component';



@Component({
  selector: 'app-avioncito',
  templateUrl: './avioncito.component.html',
  styleUrls: ['./avioncito.component.scss']
})
export class AvioncitoComponent {
  tipo = 'danger';
  categoria = 3;
  seleccionada: string = '';
  estado_puerta: string = 'cerrada';
  puerta_seleccionada: string = '';
  codigo_seg: number = 0;

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

  puertas = [
    {
      id_puerta: 'delantera-derecha',
      codigo: 5
    },
    {
      id_puerta: 'delantera-izquierda',
      codigo: 5
    },
    {
      id_puerta: 'trasera-derecha',
      codigo: 8
    },
    {
      id_puerta: 'trasera-izquierda',
      codigo: 9
    },
    {
      id_puerta: 'maletero',
      codigo: 1
    }
  ];

  pais = 'usa';

  evaluacion!: string;
  seguridad_puertas!: number;

  @ViewChild('cuba') rueda1!: RuedaComponent;

  recibirSeleccionRueda(parte: any){
    this.seleccionada = parte.identificador + ' (' + parte.marca + ') ' + parte.precio;
    this.evaluacion = parseFloat(parte.precio) > 150 ? 'Expensive' : 'Cheap';
  }

  recibirSeleccionPuerta(puerta: any){
    this.puerta_seleccionada = puerta.id_puerta +' '+ puerta.codigo;
    this.codigo_seg = puerta.codigo;
  }

  onEstadoCambiado(nuevoEstado: string) {

    this.estado_puerta =nuevoEstado;
  }

}
