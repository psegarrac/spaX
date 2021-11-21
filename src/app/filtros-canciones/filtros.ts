import { Filtro } from './filtro';
import { Genre } from './genre';
import { Artist } from './artist';


export const FILTROS: Filtro[] = [
    { id: 1, tipo: 'Genre'},
    { id: 2, tipo: 'Artist'},
    { id: 3, tipo: 'No Filters'}
];

export const GENRES: Genre[] = [
    {id: 1, nombre: 'Clasico'},
    {id: 2, nombre: 'Pop'},
    {id: 2, nombre: 'Chill'},
    {id: 2, nombre: 'Rock'}
];

export const ARTISTS: Artist[] = [
    {id: 1, nombre: 'Audio Library'},
    {id: 2, nombre: 'Amadeus Mozart'},
    {id: 3, nombre: 'Frédéric Chopin'},
    {id: 4, nombre: 'Free Vibes'}

];