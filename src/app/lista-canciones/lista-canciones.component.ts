import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cancion } from '../cancion/cancion';
import { CANCIONES } from '../cancion/canciones';


@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  canciones = CANCIONES; 
  textoBusqueda: string = "";
  

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Input() cancion:Cancion | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  selecc(seleccionada:Cancion){
    this.cancionSeleccionada.emit(seleccionada);
  }


}

