import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {
  @Input() won : string = '';
  @Output() restart = new EventEmitter<string>();
 restartFight(s :string){
  this.restart.emit(s)
 }
}
