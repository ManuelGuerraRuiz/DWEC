import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { Global } from "./global";
import { HomePageComponent } from "../pages/home-page/home-page.component";


@Injectable()
export class PokemonService {
  public url: string;
  public type: string;

  constructor (private _http: HttpClient){
    this.url = Global.url;
    this.type = 'fire';
  }

  getPokemons():Observable<any>{
      return this._http.get(this.url+'/'+ this.type);
  }
}
