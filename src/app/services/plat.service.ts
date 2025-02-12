import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  readonly platAPI = environment.apiUrl + '/plats';

  constructor(private http: HttpClient) {}

  getPlats(id: number): Observable<Plat[]> {
    return this.http.get<Plat[]>(environment.apiUrl + '/menus' + '/' + id + '/plats');
  }

  getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>(this.platAPI + '/' + id);
  }

  addPlat(nouveauPlat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platAPI, nouveauPlat);
  }

  updatePlat(plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(this.platAPI + '/' + plat.id, plat);
  }

  deletePlat(plat: Plat): Observable<Plat> {
    return this.http.delete<Plat>(this.platAPI + '/' + plat.id);
  }
}
