import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  public menus: Menu[] = [];
  public searchTerm: string = '';
  public isLoading: boolean = true; // L'écran de chargement est activé au démarrage

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // Quand les menus sont chargés, on désactive le loader
    this.menuService.getMenus().subscribe(menus => {
      this.menus = menus;
      this.isLoading = false;  // Cache le loader une fois les données reçues
    });
  }

  public filteredMenus(): Menu[] {
    if (!this.searchTerm) {
      return this.menus;
    }
    return this.menus.filter(menu => 
      menu.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
