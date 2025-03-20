import { Routes } from '@angular/router';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { FightComponent } from './fight/fight.component';

export const routes: Routes = [
    {path: "pokemon", component: PokeInfoComponent},
    {path: "fight", component: FightComponent}
];
