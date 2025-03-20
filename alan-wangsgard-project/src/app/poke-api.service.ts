import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  client: HttpClient;
  constructor(client: HttpClient) { 
    this.client = client;
  }

  getPokemon(name: string){
    return this.client.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
