import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pokemon, RespuestaPokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [PokemonService]
})
export class HomePageComponent {

  SelectedType: string = 'fire';
  pokemons: any = null;

  constructor(private _pokemonService : PokemonService){}

  changeType(type: string) {
    this.SelectedType = type;
    console.log(type);
    this._pokemonService.type = this.SelectedType;

    this._pokemonService.getPokemons().subscribe(
      response => {
        console.log(response.pokemon);
         this.pokemons = response.pokemon;
         console.log(this.pokemons);
      },
      error => {
        console.log(error);
      }
    );
    //CAMBIAR TYPE DE LA CLASE POKEMONS.SERVICE.TS
    //LLAMAR METODO GETPOKEMONS DE LA CLASE POKEMONS.SERVICE.TS
  }


}
