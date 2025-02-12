import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../../models/plat';
import { PlatService } from '../../services/plat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrl: './plat-list.component.css',
})
export class PlatListComponent {
  public plats!: Observable<Plat[]>;

  constructor(
    private platService: PlatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.plats = this.platService.getPlats(id)
  }
}
