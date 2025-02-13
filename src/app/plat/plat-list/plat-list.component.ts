import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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
export class PlatListComponent {
  public plats!: Observable<Plat[]>;
  public menu!: Observable<Menu>;

  constructor(
    private platService: PlatService,
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.plats = this.platService.getPlats(id)
    this.menu = this.menuService.getMenu(id)
  }
}
