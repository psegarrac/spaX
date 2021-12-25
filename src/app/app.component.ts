import { Component } from '@angular/core';
import { Cancion } from './cancion/cancion';
//import { CANCIONES } from './cancion/canciones';
import { Artist } from './filtros-canciones/artist';
import { Filtro } from './filtros-canciones/filtro';
import { Genre } from './filtros-canciones/genre';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {

  canciones: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.canciones = firestore.collection('canciones').valueChanges();
  }
  title: string = "SpaX";
  textoFiltrado: string = "";
  //canciones = CANCIONES; 


  cancionSelecc: Cancion | null = null;
  filtroSelecc: Filtro | null = null;
  artistSelecc: Artist | null = null;
  genreSelecc: Genre | null = null;
  noSelecc: Filtro | null = null;

  selecc(seleccionada:Cancion){
    this.cancionSelecc = seleccionada;
  }

  seleccionFiltro(seleccion:Filtro){
    this.filtroSelecc = seleccion;
    this.seleccionArtist(null);
    this.seleccionGenre(null);
  }

  seleccionArtist(seleccion:Artist | null){
    this.artistSelecc = seleccion;
  }

  seleccionGenre(seleccion:Genre | null){
    this.genreSelecc = seleccion;
  }


}





