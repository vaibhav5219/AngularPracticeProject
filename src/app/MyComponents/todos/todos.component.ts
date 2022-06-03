import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  localItem:any;
  constructor() 
  {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo)
  {
    console.log(todo);
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo)
  {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo)
  {
    const idx = this.todos.indexOf(todo);
    this.todos[idx].active = !this.todos[idx].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
