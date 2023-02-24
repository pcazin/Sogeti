import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';


const routes: Routes = [
  { 
    path: 'details/:id', 
    component: TodoDetailsComponent 
  },
  { 
    path: 'new', 
    component: NewTodoComponent 
  },
  { 
    path: '', 
    component: TodoListComponent 
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
