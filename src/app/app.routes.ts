import { Routes } from '@angular/router';
import { SettingsComponent } from '../pages/settings/settings.component';
import { ScoreShiaiComponent } from '../pages/score-shiai/score-shiai.component';
import { ScoreKogoComponent } from '../pages/score-kogo/score-kogo.component';
import { ScoreKataComponent } from '../pages/score-kata/score-kata.component';
import { ScoreEnbuComponent } from '../pages/score-enbu/score-enbu.component';

export const routes: Routes = [
    { path: 'settings', component: SettingsComponent },
    { path: 'score/shiai', component: ScoreShiaiComponent },
    { path: 'score/kogo', component: ScoreKogoComponent },
    { path: 'score/kata', component: ScoreKataComponent },
    { path: 'score/enbu', component: ScoreEnbuComponent },
];
