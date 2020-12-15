
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemsComponent } from './components/add-items/add-items.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-items' },
  { path: 'list-items', component: ListItemsComponent },
  { path: 'add-items', component: AddItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
