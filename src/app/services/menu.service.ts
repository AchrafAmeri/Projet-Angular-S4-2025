import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly menuAPI = environment.apiUrl + '/menus';

  constructor(private http: HttpClient) {}

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuAPI);
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(this.menuAPI + '/' + id);
  }

  addMenu( nouveauMenu:Menu ): Observable<Menu> {
    return this.http.post<Menu>(this.menuAPI, nouveauMenu);
  }

  updateMenu( menu:Menu ): Observable<Menu> {
    return this.http.put<Menu>(this.menuAPI + '/' + menu.id, menu);
  }

  deleteMenu(menu: Menu): Observable<Menu> {
    const deletePlatsUrl = this.menuAPI + '/' + menu.id +'/plats';
    this.http.delete(deletePlatsUrl).subscribe({
      next: () => {
        console.log(`Plats associés au menu ${menu.id} supprimés.`);
      },
      error: (err) => {
        console.log('Erreur lors de la suppression des plats :', err);
      }
    });

    // 2. Supprimer le menu
    return this.http.delete<Menu>(this.menuAPI + '/' + menu.id);
  }
}
