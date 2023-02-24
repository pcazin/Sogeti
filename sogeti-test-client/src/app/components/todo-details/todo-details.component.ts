import { ActivatedRoute } from '@angular/router';
import { TodoService } from './../../todo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTodo()
  }

  getTodo(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.todo$ = this.todoService.getById(id);
    });
  }

}
