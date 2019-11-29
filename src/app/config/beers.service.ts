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

  getBeersByName(name: string): Observable<Beer[]> {

    name = name.replace(/ /g, '_');
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?beer_name=${name}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getBeersByMaxIbu(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?ibu_lt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }


  getBeersByMinIbu(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?ibu_gt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getBeersByMaxAbv(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?abv_lt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getBeersByMinAbv(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?abv_gt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getBeersByMaxEbc(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?ebc_lt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getBeersByMinEbc(value: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?ebc_gt=${value}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }
  
  getBeersByBrewedBefore(month: number, year: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?brewed_before=${month}-${year}`)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }
  

  getBeersByBrewedAfter(month: number, year: number): Observable<Beer[]> {

    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers?brewed_after=${month}-${year}`)
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

  getAll() {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }

}
