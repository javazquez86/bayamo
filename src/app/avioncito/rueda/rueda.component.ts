import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rueda',
  templateUrl: './rueda.component.html',
  styleUrls: ['./rueda.component.css']
})
export class RuedaComponent {

@Input() identificador!: string;
@Input() marca!: string;
@Input() precio!: string;

}
