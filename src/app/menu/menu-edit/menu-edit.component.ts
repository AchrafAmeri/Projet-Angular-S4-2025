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
  public isLoading: boolean = true;  

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public onSubmit(leFormulaire: NgForm): void {
    const currentDate = new Date();
    if (leFormulaire.valid) {
      let ObservableAction
      if (this.menu.id) {
        ObservableAction = this.menuService.updateMenu(this.menu)
      } else {
        this.menu.date_creation = currentDate.toISOString().split('T')[0];
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
    const idMenu = this.route.snapshot.params["id"];
    
    if (idMenu) {
      this.menuService.getMenu(idMenu).subscribe({
        next: menu => {
          this.menu = { ...menu };
          console.log("Menu récupéré :", this.menu);
          this.isLoading = false;
        },
        error: err => {
          console.error("Erreur lors de la récupération du menu", err);
          this.router.navigateByUrl('/menus');
        }
      });
    }else{
      this.isLoading = false;
    }
  }
}
