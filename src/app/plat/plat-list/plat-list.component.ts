import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrl: './plat-list.component.css',
})
export class PlatListComponent implements OnInit {
  public plats: Plat[] = [];
  public menu!: Menu;
  public searchTerm: string = '';
  public totalCalories!: number;
  public isLoading: boolean = true;

  constructor(
    private platService: PlatService,
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    
    this.menuService.getMenu(id).subscribe(menu => {
      this.menu = menu;
    });
    
    this.platService.getPlats(id).subscribe(plats => {
      this.plats = plats;
      
      this.totalCalories = plats.reduce((total, plat) => total + plat.calories, 0);
      
      this.isLoading = false;
    });
  }

  public filteredPlats(): Plat[] {
    if (!this.searchTerm) {
      return this.plats;
    }
    
    return this.plats.filter(plat =>
      plat.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
