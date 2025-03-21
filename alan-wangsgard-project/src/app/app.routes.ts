import { Routes } from '@angular/router';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { FightComponent } from './fight/fight.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "pokemon", component: PokeInfoComponent},
    {path: "fight", component: FightComponent},
    {path: "", component: HomeComponent}
];
