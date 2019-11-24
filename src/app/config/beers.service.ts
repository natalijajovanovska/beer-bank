import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Beer } from './beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private beersUrl: string = 'https://api.punkapi.com/v2/beers';
  private perPage: string = "&per_page=6";

  constructor(private http: HttpClient) { }

  getBeers(name: string, page: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + "?beer_name=" + name + "&page=" + page + this.perPage)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getPage(page: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + "?page=" + page + this.perPage)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getFavourites(sFavs: string, page: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl + "?ids=" + sFavs + "&page=" + page + this.perPage)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private(message: string) {
    console.log('UserService: ' + message);
  }

}
