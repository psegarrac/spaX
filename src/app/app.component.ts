import { Component } from '@angular/core';
import { Cancion } from './cancion/cancion';
import { CANCIONES } from './cancion/canciones';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title: string = "SpaX";
  textoFiltrado: string = "";
  canciones = CANCIONES; 
  cancionSelecc: Cancion | null = null;
  

  selecc(seleccionada:Cancion){
    this.cancionSelecc = seleccionada;
  }

}





