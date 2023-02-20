import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  SelectedType: string = 'Fire';
  changeType(type: string) {
    this.SelectedType = type;
  }

}
