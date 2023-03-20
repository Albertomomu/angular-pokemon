import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, ITypeResponse, IApiResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';



  constructor(private http: HttpClient) { }

  getAllPokemon({ limit = 20, offset = 0 }): Observable<IApiResponse> {
    const url = `${this.baseUrl}?limit=${limit}&offset=${offset}`
    return this.http.get<IApiResponse>(url)
  }

  getPokemonByName({ name = '' }): Observable<IPokemon> {
    const url = `${this.baseUrl}/${name}`
    return this.http.get<IPokemon>(url)
  }

  getPokemonByNameV2({ name }: { name: string }) {
    const url = `${this.baseUrl}/${name}`
    return this.http.get(url)
  }

  getPokemonTypes(type: string): Observable<Object> {
    const url = `${type}`
    return this.http.get(url)
  }

}
