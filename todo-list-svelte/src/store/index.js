import { writable } from 'svelte/store';

export const todos = writable([
  {
    id: 0,
    title: "Make a Todo List in Vue",
    completed: true,
  },
  {
    id: 1,
    title: "Make a Todo List in React",
    completed: false,
  },
  {
    id: 2,
    title: "Make a Todo List in Svelte",
    completed: false,
  },
  {
    id: 3,
    title: "Make a Todo List in Angular",
    completed: false,
  }
]);