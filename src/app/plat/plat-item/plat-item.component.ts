import { Component, Input } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrl: './plat-item.component.css',
})
export class PlatItemComponent {
  @Input()
  public plat: Plat = new Plat();

  constructor(
    private platService: PlatService,
    private router: Router,
  ) {}

  public onDelete(): void {
    // Afficher la boîte de confirmation
    const confirmation = window.confirm(`Êtes-vous sûr de vouloir supprimer le plat : ${this.plat.nom} ?`);
    // Si l'utilisateur confirme, procéder à la suppression
    if (confirmation) {
      let ObservableAction
      ObservableAction = this.platService.deletePlat(this.plat)
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
}
