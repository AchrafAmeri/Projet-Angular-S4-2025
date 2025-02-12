import { Component } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Menu } from '../../models/menu';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-plat-edit',
  templateUrl: './plat-edit.component.html',
  styleUrl: './plat-edit.component.css'
})
export class PlatEditComponent {
  plat: Plat = new Plat()
  public menus!: Observable<Menu[]>

  constructor(
    private platService: PlatService,
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public onSubmit(leFormulaire: NgForm): void {
    if (leFormulaire.valid) {
      let ObservableAction
      if (this.plat.id) {
        ObservableAction = this.platService.updatePlat(this.plat)
      } else {
        ObservableAction = this.platService.addPlat(this.plat)
      }
      ObservableAction.subscribe({
        next: plat => {
          console.log("Enregistrement OK : ", plat)
          this.router.navigateByUrl("/menus")
        },
        error: err => {
          console.log("ERREUR SAVE ", err)
        }
      })
    }
  }

  public ngOnInit(): void {
    this.menus = this.menuService.getMenus()
    const idPlat = this.route.snapshot.params["id"]
    this.plat = new Plat()

    if (idPlat) {
      this.platService.getPlat(idPlat).subscribe({
        next: plat => this.plat = {...plat},
        error: err => this.router.navigateByUrl('/plats')
      })
    }
    console.log(this.plat)
  }
}
