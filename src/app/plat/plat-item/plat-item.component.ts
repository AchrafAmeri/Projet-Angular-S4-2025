import { Component, Input } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { Router } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrl: './plat-item.component.css',
})
export class PlatItemComponent {
  @Input()
  public plat: Plat = new Plat();

  image: string = '';

  constructor(
    private platService: PlatService,
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageService.getImage(this.plat.nom).subscribe(
      (result: string) => { 
        this.image = result;
        console.log(this.image);
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image:', error);
      }
    );
  }

  public onDelete(): void {
    const confirmation = window.confirm(`Êtes-vous sûr de vouloir supprimer le plat : ${this.plat.nom} ?`);
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
