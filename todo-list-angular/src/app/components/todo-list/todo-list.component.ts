import { Component, OnInit } from '@angular/core';

interface Todo {
  _id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  newTodo: string;

  constructor() {
    this.todos = [];
    this.newTodo = '';
  }

  ngOnInit(): void {}

  completeTodo(id: number) {
    const todo = this.todos.find((todo) => todo._id == id);

    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo._id != id);
  }

  onSubmitAddNewTodo() {
    if (this.newTodo.trim().length) {
      this.todos.push({
        _id: this.todos.length,
        text: this.newTodo,
        completed: false,
      });

      this.newTodo = '';
    }
  }
}
