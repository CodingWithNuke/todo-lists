<template>
  <ul class="list-group">
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @deleteTodo="onDeleteTodo"
      @completeTodo="onCompleteTodo"
    />
  </ul>
</template>

<script>
import { computed, defineComponent } from "vue";

import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  name: "TodoList",

  components: {
    TodoListItem,
  },

  props: {
    todos: Array,
  },

  setup(props, { emit }) {
    const todos = computed(() => props.todos);

    function onDeleteTodo(id) {
      emit("deleteTodo", id);
    }

    function onCompleteTodo(id) {
      emit("completeTodo", id);
    }

    return {
      todos,
      onDeleteTodo,
      onCompleteTodo,
    };
  },
});
</script>

<style>
</style>