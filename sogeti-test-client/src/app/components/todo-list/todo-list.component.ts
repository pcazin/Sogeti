import { TodoService } from './../../todo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList$!: Observable<Todo[]>;

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoList$ = this.todoService.getAll();
  }

  deleteTodo(todo: Todo) {
    this.todoList$ = this.todoService.delete(todo);
  }

  done(todo: Todo) {
    this.todoList$ = this.todoService.ToDone(todo);
  }

}
