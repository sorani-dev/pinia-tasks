<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i
          class="material-icons"
          @click="taskStore.deleteTask(task.id)"
      >delete</i>
      <i
          :class="{ active: task.isFav}"
          class="material-icons"
          @click="taskStore.toggleFavorites(task.id)"
      >favorite</i>
    </div>
  </div>
</template>

<script>
import {useTaskStore} from "@/store/TaskStore";

export default {
  name: "TaskDetails",
  props: ['task'],
  setup() {
    const taskStore = useTaskStore();

    return {taskStore}
  }
}
</script>

<style scoped>

/* Task */
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, .05);
  display: flex;
  justify-content: center;
  align-items: center;
}

.task h3, .task .icons {
  display: inline-block;
}

.task .icons {
  text-align: right;
}

.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

.task i.active {
  color: #ff005d;
}
</style>