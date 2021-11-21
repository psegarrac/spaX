import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, argSearch: any): any {
    const resultSongs: any[] = [];
    
    argSearch = argSearch.toLowerCase();
    for(const cancion of value){
      if(argSearch === '' || cancion.title.toLowerCase().indexOf(argSearch) > -1){
        resultSongs.push(cancion);
        console.log(resultSongs, "resultSongs")
      }
    }


    return resultSongs;
  }



}
