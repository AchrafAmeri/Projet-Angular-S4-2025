import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { PlatListComponent } from './plat/plat-list/plat-list.component';
import { PlatEditComponent } from './plat/plat-edit/plat-edit.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  { path: 'menus', component: MenuListComponent },
  { path: 'menu/new', component: MenuEditComponent },
  { path: 'menu/edit/:id', component: MenuEditComponent },
  { path: 'menu/:id/plats', component: PlatListComponent },
  { path: 'plat/new', component: PlatEditComponent },
  { path: 'plat/edit/:id', component: PlatEditComponent },
  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
