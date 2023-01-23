<template>
  <main>
    <!-- Heading -->
    <header>
      <img src="./assets/logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- Task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
  </main>
</template>

<script>
import {useTaskStore} from "@/store/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";

export default {
  components: {TaskDetails},
  setup() {
    const taskStore = useTaskStore()

    return {taskStore}
  }
}

</script>

<style scoped>

/* Header */
header {
  text-align: center;
  background: #e7e7e7;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

header img {
  max-width: 60px;
  transform: rotate(-10deg);
}

header h1 {
  margin: 0;
  font-size: 2em;
  padding-top: 25px;
  margin-left: 15px;
  color: #777;
  transform: rotate(2deg);
}

/* Task list*/
.task-list {
  max-width: 640px;
  margin: 20px auto;
}
</style>