import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Movies } from './movies';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesService {
  constructor(private http: Http) {}
  private BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
  private API_KEY = 'ddbac9c7271014db02e4840fba2911e6';
  private PARAMS = 'language=pt-BR';
  private MOVIES_URL = `${this.BASE_URL}?api_key=${this.API_KEY}&${this.PARAMS}`;
  private data: string[];

  getMovie(): Observable<Movies[]> {
    return this.http.get(this.MOVIES_URL)
      .map(this.extractMovies)
      .catch(this.handleError);
  }

  private extractMovies(res: Response) {
    return <Movies[]>res.json();
  }

  private handleError(res: Response) {
    return Observable.throw(res.json().error || 'Server error');
  }
}
