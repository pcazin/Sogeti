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

  new(title: string, description: string): Observable<Todo[]> {
    const url = `${this.baseUrl}/add`;
    const body = { title: title, description: description };
    return this.http.post<Todo[]>(url, body)
  }

  ToDone(todo: Todo): Observable<Todo[]> {
    const url = `${this.baseUrl}/done`;
    const body = todo;
    return this.http.put<Todo[]>(url, body)
  }

  delete(todo: Todo): Observable<Todo[]> {
    const url = `${this.baseUrl}/delete`;
    const body = todo;
    return this.http.delete<any>(url, {
      body: body,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  getById(id: string): Observable<Todo> {
    const url = `${this.baseUrl}/getById/${id}`;
    const body = id;
    return this.http.get<Todo>(url);
  }
}
