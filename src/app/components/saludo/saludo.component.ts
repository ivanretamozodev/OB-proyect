import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() nombre: string = 'extraño';
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
    console.log('hola desde el ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //instrucciones cuando el componente detecte cambios
    console.log('se detectaron cambios');
  }
  ngOnDestroy(): void {
    //instrucciones cuando el componente se destruya
    console.log('el componente ah desaparecido');
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

/* 
  ORDEN DE LOS CICLOS DE VIDA DE LOS COMPONENTES:
  **1.NgOnChanges
  **2.NgOnInit
    3.NgAfterContentInit
    4.NgAfterContentChecked
    5.NgAfterViewInit
    6.NgAfterViewChecked
    7.NgAfterContentChecked
    8.NgAfterViewChecked
  **9.NgOnDestroy
*/
