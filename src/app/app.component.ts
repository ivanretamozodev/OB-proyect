import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'openBootcamp';
  nombre = 'pepe';
  binding = '';
  /*
   *esta funcion se ejecuta cuando en el hijo (saludo component) sucede un evento
   */
  recibirMensajeDelHijo(evento: string) {
    alert(evento);
  }
}
