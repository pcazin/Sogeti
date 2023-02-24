import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<Todo[]>(url)
  }
}
