import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cancion } from '../cancion/cancion';
//import { CANCIONES } from '../cancion/canciones';
import { Artist } from '../filtros-canciones/artist';
import { Filtro } from '../filtros-canciones/filtro';
import { Genre } from '../filtros-canciones/genre';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  //canciones = CANCIONES; 

  canciones: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
  this.canciones = firestore.collection('canciones').valueChanges();
  }

  @Input() textoBusqueda: string = "";
  @Input() filtroArtista: Artist | null = null; 
  @Input() filtroGenre: Genre | null = null; 
  @Input() filtroNo: Filtro | null = null;

  

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();



  //constructor() { }

  ngOnInit(): void {
  }

  selecc(seleccionada:Cancion){
    this.cancionSeleccionada.emit(seleccionada);
  }


}

