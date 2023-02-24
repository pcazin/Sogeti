import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo: Todo;
  @Output() deleteEvent = new EventEmitter<Todo>();
  @Output() doneEvent = new EventEmitter<Todo>();

  constructor(private router: Router) { }

  onChangeState() {
    if(this.todo.state === 'Done') {
      this.deleteEvent.emit(this.todo);
    } else {
      this.doneEvent.emit(this.todo);
    }
  }

  onSeeDetails() {
    console.log(this.todo.id)
    this.router.navigate(['/details', this.todo.id])
  }

}
