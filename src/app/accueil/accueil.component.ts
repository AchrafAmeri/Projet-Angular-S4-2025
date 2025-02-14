import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  image: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImage('grilled salmon').subscribe(
      (result: string) => { 
        this.image = result;
        console.log(this.image);
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'image:', error);
      }
    );
  }
}
