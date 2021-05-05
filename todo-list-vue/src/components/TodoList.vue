<template>
  <ul class="list-group">
    <template v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @deleteTodo="deleteTodo"
        @completeTodo="completeTodo"
      />
    </template>
    <i v-else>No todos to display</i>
  </ul>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  name: "TodoList",

  components: {
    TodoListItem,
  },

  setup() {
    const store = useStore();

    const todos = computed(() => store.getters["todos"]);

    function deleteTodo(id) {
      store.dispatch("deleteTodo", id);
    }

    function completeTodo(id) {
      store.dispatch("completeTodo", id);
    }

    return {
      todos,
      deleteTodo,
      completeTodo,
    };
  },
});
</script>