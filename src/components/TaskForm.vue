<template>
  <form @submit.prevent="handleSubmit">
    <input
        id="name"
        v-model="newTask"
        name="name"
        placeholder="I need to..."
        type="text"
    >
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import {useTaskStore} from "@/store/TaskStore";
import {ref} from "vue";

export default {
  name: "TaskForm",
  setup() {
    const taskStore = useTaskStore()

    const newTask = ref('')
    const handleSubmit = function () {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          id: Math.floor(Math.random() * 10000),
          isFavorite: false,
          title: newTask.value
        })
        newTask.value = ''
      }
    }
    return {handleSubmit, useTaskStore, newTask}
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 10px;
}
form button {
  background-color: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}

form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
</style>