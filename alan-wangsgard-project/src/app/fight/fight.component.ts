import { Component } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { timeout } from 'rxjs';
import { GameOverComponent } from "../game-over/game-over.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fight',
  imports: [GameOverComponent, NgIf],
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.css'
})
export class FightComponent {
pokemon1: any;
pokemon1Health : number = 100
pokemon2: any;
pokemon2Health : number = 100
won: string = ""
playerTurn: boolean = true;
gameover: boolean = false
  pokeApi: PokeApiService;
  pokeName: string =""
  constructor(pokeApi: PokeApiService){
    this.pokeApi = pokeApi
  }
  ngOnInit(): void {
    this.setUp()
  }
  attack(){
    this.pokemon2Health-=Math.floor(Math.random()*50)
    this.playerTurn = false
    this.check()
    setTimeout(()=>{this.pokemon1Health-=Math.floor(Math.random()*50) 
    this.playerTurn = true;
    this.check()

    }, 1000)
    

  }
  block(){
    this.playerTurn = false
    setTimeout(()=>{let damage = Math.floor(Math.random()*50)-Math.floor(Math.random()*50)
      if(damage > 0)
      this.pokemon1Health-=damage
  this.playerTurn = true;
  this.check()

}, 1000
    )
    

  }
  check(){
    if(this.pokemon1Health <=0){
      this.won = "lost"
      this.gameover = true

    }else if(this.pokemon2Health<=0){
      this.won = "won"
      this.gameover = true

    }
   
  }
  setUp(){
    this.pokeApi.getPokemon(Math.floor(Math.random()*1000).toString()).subscribe((body)=>{this.pokemon1=body})
    this.pokeApi.getPokemon(Math.floor(Math.random()*1000).toString()).subscribe((body)=>{this.pokemon2=body})
    this.pokemon1Health = 100
    this.pokemon2Health = 100
    this.gameover = false
    this.won = ""
  }
  onRestart(){
      this.setUp()
  }
}
