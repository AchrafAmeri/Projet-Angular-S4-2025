import { Component, Input } from '@angular/core';
import { EtatMenu, Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input()
  public menu: Menu = new Menu();
  readonly etatMenu = EtatMenu;
}
