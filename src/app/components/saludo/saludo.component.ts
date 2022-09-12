import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {
  @Input() nombre: string = 'extraño';
  constructor() {}
  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
  }

  /*
   * ejemplo de gestion de un evento click en el DOM
   */
  alertarSaludo(): void {
    alert(`hola ${this.nombre} alerta despachada desde un boton`);
  }
}
