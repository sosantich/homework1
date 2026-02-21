import { Routes, provideRouter } from '@angular/router';
import { ItemsTableComponent } from './components/items-table/items-table.component';
import { StasGameComponent } from './components/stasgame/stasgame.component';

export const routes: Routes = [
  { path: '', component: ItemsTableComponent },
  { path: 'game', component: StasGameComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];