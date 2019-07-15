import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  movies = {};
  constructor(private http: HttpClient) {}

  getMovie(): Observable<any> {
    return this.http.get<any>('http://52.78.134.79/movies/');
  }

  getGenre(): Observable<any> {
    return this.http.get<any>('http://52.78.134.79/movies/genre/list/');
  }
}
