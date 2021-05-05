import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
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
        completed: true,
      },
    ]
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    COMPLETE_TODO(state, id) {
      const todo = state.todos.find(todo => todo.id == id);

      todo.completed = !todo.completed
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id != id);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    completeTodo({ commit }, id) {
      commit('COMPLETE_TODO', id);
    },
    removeTodo({ commit }, id) {
      commit('REMOVE_TODO', id);
    }
  },
  getters: {
    todos: (state) => state.todos
  }
})
