<template>
  <li class="list-group-item d-flex align-items-center">
    <label class="flex-fill">
      <input
        v-model="completed"
        class="form-check-input me-1"
        type="checkbox"
      />
      {{ todo.title }}
    </label>
    <button class="btn btn-danger" @click="deleteTodo">Delete</button>
  </li>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "TodoListItem",

  props: {
    todo: Object,
  },

  setup(props, { emit }) {
    const completed = computed({
      get: () => props.todo.completed,
      set: () => {
        emit("completeTodo", props.todo.id);
      },
    });

    function deleteTodo() {
      emit("deleteTodo", props.todo.id);
    }

    function completeTodo() {
      emit("completeTodo", props.todo.id);
    }

    return {
      deleteTodo,
      completeTodo,
      completed,
    };
  },
});
</script>

<style>
</style>