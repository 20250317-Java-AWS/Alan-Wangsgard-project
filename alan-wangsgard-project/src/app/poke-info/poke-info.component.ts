import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { KeyValuePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poke-info',
  imports: [NgFor, FormsModule],
  templateUrl: './poke-info.component.html',
  styleUrl: './poke-info.component.css'
})
export class PokeInfoComponent implements OnInit{
  pokemon: any;
  pokeApi: PokeApiService;
  pokeName: string =""
  constructor(pokeApi: PokeApiService){
    this.pokeApi = pokeApi
  }
  ngOnInit(): void {
    this.pokeApi.getPokemon("vulpix").subscribe((body)=>{this.pokemon=body})
  }
  updatePokemon(){
    this.pokeApi.getPokemon(this.pokeName).subscribe((body)=>{this.pokemon=body})
  }
}
