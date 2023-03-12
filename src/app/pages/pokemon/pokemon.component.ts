import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonService } from 'src/app/core/services/pokemon.service';
import { IApiResponse, IPokemon } from 'src/app/core/interfaces';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  pokemonList: IPokemon[] = [];
  pokemonLimit = 20;
  pokemonOffset = 0;
  pokemonListCount!: number;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonList()
  }

  getPokemonList() {
    const limit = this.pokemonLimit
    const offset = this.pokemonOffset
    this.pokemonService.getAllPokemon({ limit, offset }).subscribe(({ count, results }: IApiResponse) => {
      this.pokemonList = results;
      this.pokemonListCount = count;
    });
  }

  navigateToPokemon(pokemonName: string) {
    this.router.navigate(['/pokemon', pokemonName])
  }

}
