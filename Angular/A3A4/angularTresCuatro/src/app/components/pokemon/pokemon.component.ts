import { Component,EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent implements OnInit {
  @Input() Items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  @Input() SelectedItem: string = 'Item 1';
  @Output() OnChange: EventEmitter<string> = new EventEmitter<string>();
  Show: boolean = false;
  constructor() { }
  ngOnInit(): void {
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
