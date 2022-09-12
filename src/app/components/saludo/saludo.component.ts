import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {
  @Input() nombre: string = 'extraño';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
  }

  /*
   * ejemplo de gestion de un evento click en el DOM
  alertarSaludo(): void {
    alert(`hola ${this.nombre} alerta despachada desde un boton`);
  }
  */

  enviarMensajeAlPadre() {
    this.mensajeEmitter.emit(
      `hola ${this.nombre} alerta despachada desde un boton`
    );
  }
}
