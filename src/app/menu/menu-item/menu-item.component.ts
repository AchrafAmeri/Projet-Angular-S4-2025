import { Component, Input } from '@angular/core';
import { Menu, StatutMenu } from '../../models/menu';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css',
})
export class MenuItemComponent {
  @Input()
  public menu: Menu = new Menu();
  readonly statutMenu = StatutMenu;

  constructor(
    private menuService: MenuService,
    private router: Router,
  ) {}

  public onDelete(): void {
    let ObservableAction
    ObservableAction = this.menuService.deleteMenu(this.menu)
    ObservableAction.subscribe({
      next: menu => {
        console.log("Suppression OK : ", menu)
        this.router.navigateByUrl("/").then(
          ()=>this.router.navigateByUrl("/menus") 
          )
      },
      error: err => {
        console.log("ERREUR DELETE ", err)
      }
    })
  }
  
}
