import { Component } from '@angular/core';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
})
export class MenuListComponent {
  public menus!: Observable<Menu[]>

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menus = this.menuService.getMenus()
  }
}
