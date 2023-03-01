export class Pokemon {
  public name: String;
  public url: String;

  constructor(name: String, url: String){
    this.name = name;
    this.url = url;
  }
}

export interface RespuestaPokemon
{
  slot: number;
  pokemon: Pokemon;
}
