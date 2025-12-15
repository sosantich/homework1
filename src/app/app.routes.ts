import { Routes } from '@angular/router';
import { Parent1 } from './task1/parent/parent1/parent1';
import { Parent2 } from './task1/parent/parent2/parent2';
import { Parent3 } from './task1/parent/parent3/parent3';
import { Parent } from './task-viewchild-contentchild/parent';
import { Lifecycle } from './task-lifecycle hooks/lifecycle';

export const routes: Routes = [
{path: 'task11', component: Parent1},
{path: 'task12', component: Parent2},
{path: 'task13', component: Parent3},
{path: 'task2', component: Parent},
{path: 'task3', component: Lifecycle}
];
