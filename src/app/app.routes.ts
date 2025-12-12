import { Routes } from '@angular/router';
import { Parent1 } from './task1/parent/parent1/parent1';
import { Parent2 } from './task1/parent/parent2/parent2';
import { App } from './app';
import { Parent3 } from './task1/parent/parent3/parent3';

export const routes: Routes = [
{path: 'task11', component: Parent1},
{path: 'task12', component: Parent2},
{path: 'task13', component: Parent3}
];
