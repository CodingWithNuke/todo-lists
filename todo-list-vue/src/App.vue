<template>
  <div class="container py-4">
    <TodoForm />
    <TodoList />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: "App",

  components: {
    TodoForm,
    TodoList,
  },
});
</script>