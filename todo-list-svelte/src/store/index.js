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
    completed: true,
  },
  {
    id: 2,
    title: "Make a Todo List in Svelte",
    completed: true,
  },
]);