import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Photo {
  id: string;
  url: string;
  src: {
    original: string;
  };
}

interface PexelsResponse {
  photos: Photo[];
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly imageAPI = 'https://api.pexels.com/v1/search';
  readonly cleAPI = 'tq5hi7XKmRZz4dMlxSGzwXsTQpbZgPMg5q2pI83aw448a8tNm3cJbcgr';

  constructor(private http: HttpClient) {}

  getImage(nom: string): Observable<string> {
    const url = `${this.imageAPI}?query=${nom}&per_page=1`;
    const headers = new HttpHeaders({
      'Authorization': `${this.cleAPI}`
    });

    return this.http.get<PexelsResponse>(url, { headers }).pipe(
      map(response => {
        return response.photos.length > 0 ? response.photos[0].src.original : '';
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération de l\'image:', error);
        return [''];
      })
    );
  }
}
