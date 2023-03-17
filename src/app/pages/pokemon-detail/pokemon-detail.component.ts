import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/core/interfaces';
import { map } from 'rxjs/operators';


import { PokemonService } from 'src/app/core/services/pokemon.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {

  panelOpenState = false;
  pokemon!: IPokemon;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    const name: any = this.route.snapshot.paramMap.get('name');
    this.pokemonService.getPokemonByName({ name }).subscribe((data: IPokemon) => {
      this.pokemon = data
      console.log(data)
    })
  }

}
