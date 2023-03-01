import { Component,EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { RespuestaPokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemons.service';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  @Input() Items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  @Input() SelectedItem: string = 'Item 1';
  @Output() OnChange: EventEmitter<string> = new EventEmitter<string>();
  Show: boolean = false;
  _homeComp: HomePageComponent;

  constructor(_homeComp: HomePageComponent) { this._homeComp = _homeComp }

  ngOnInit(): void {
    this._homeComp.changeType("fire");
  }

  toggle() {
    this.Show = !this.Show;
  }

  select(item: string) {
    this.SelectedItem = item;
    this.OnChange.emit(this.SelectedItem);
    this.toggle();
  }
}
