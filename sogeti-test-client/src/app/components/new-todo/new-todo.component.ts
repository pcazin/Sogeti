import { TodoService } from './../../todo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  title = new FormControl('', Validators.required);
  description = new FormControl('');

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  
    if(this.title.valid){
      this.todoService.new(this.title.value, this.description.value).subscribe( _response => {
        this.router.navigate([""])
      })
    } else {
      // remplacable par une snackbar
      alert('Vous devez entrer un titre pour la tâche.')
    }
  }
}
