import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.component.html',
  styleUrls: ['./puerta.component.scss']
})
export class PuertaComponent  {

  @Input() id_puerta!: string;
  @Input() codigo!: number;
  @Input() estado!: string;
  @Output() puertaSeleccionada = new EventEmitter<any>();
  @Output() estadoCambiado = new EventEmitter<string>();

  emitirSeleccionPuerta(){
    let puerta ={
      id_puerta: this.id_puerta,
      codigo: this.codigo,
      estado:this.estado
    }
    this.puertaSeleccionada.emit(puerta);
  }

  onEstadoChange(estado: string) {

    this.estadoCambiado.emit(estado);
  }

}
