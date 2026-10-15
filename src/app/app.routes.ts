import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Saveditems } from './components/saveditems/saveditems';
import { Characterdetails } from './components/characterdetails/characterdetails';
import { Housedetails } from './components/housedetails/housedetails';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component:About},
    {path: 'saveditems', component:Saveditems},
    {path: 'character/:url', component:Characterdetails},
    {path: 'house/:url', component:Housedetails}
];
