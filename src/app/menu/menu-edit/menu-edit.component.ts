import { Component } from '@angular/core';
import { Menu, StatutMenu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})
export class MenuEditComponent {
  menu: Menu = new Menu()
  readonly statutMenu = StatutMenu

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public onSubmit(leFormulaire: NgForm): void {
    if (leFormulaire.valid) {
      let ObservableAction
      if (this.menu.id) {
        ObservableAction = this.menuService.updateMenu(this.menu)
      } else {
        ObservableAction = this.menuService.addMenu(this.menu)
      }
      ObservableAction.subscribe({
        next: menu => {
          console.log("Enregistrement OK : ", menu)
          this.router.navigateByUrl("/menus")
        },
        error: err => {
          console.log("ERREUR SAVE ", err)
        }
      })
    }
  }

  public ngOnInit(): void {
    const idMenu = this.route.snapshot.params["id"]
    this.menu = new Menu()

    if (idMenu) {
      this.menuService.getMenu(idMenu).subscribe({
        next: menu => this.menu = {...menu},
        error: err => this.router.navigateByUrl('/menus')
      })
    }
    console.log(this.menu)
  }
}
