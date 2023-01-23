<template>
  <main>
    <!-- Heading -->
    <header>
      <img alt="Pinia Logo" src="./assets/logo.svg">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- New Task form -->
    <div class="new-task-form">
      <TaskForm/>
    </div>

    <!-- Filter bar -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favorites'">Favorite tasks</button>
    </nav>

    <!-- Loading -->
    <div v-if="taskStore.isLoading" class="loading">Loading tasks...</div>
    <!-- Task list -->
    <div v-if="filter === 'all'" class="task-list">
      <p>Your have {{ totalCount }} task{{ plural(taskStore.totalCount) }} left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :key="task.id" :task="task"/>
      </div>
    </div>

    <!-- Favorites task list -->
    <div v-if="filter === 'favorites'" class="task-list">
      <p>Your have {{ favoritesCount }} favorite{{ plural(favoritesCount) }} left to do</p>
      <div v-for="task in favorites" :key="task.id">
        <TaskDetails :key="task.id" :task="task"/>
      </div>
    </div>

<!-- Reset tasks -->
    <button class="reset-tasks" @click="taskStore.$reset">Reset State</button>
<!-- Reload Tasks -->
    <button class="reload-tasks" @click="taskStore.getTasks()">Reload Tasks</button>
  </main>
</template>

<script>
import {ref} from "vue";

import {useTaskStore} from "@/store/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import {storeToRefs} from "pinia";

export default {
  components: {TaskForm, TaskDetails},
  setup() {
    const taskStore = useTaskStore()

    const filter = ref('all')

    // Fetch tasks
    taskStore.getTasks()

    // Reset form
    const {tasks, isLoading, totalCount, favoritesCount, favorites} = storeToRefs(taskStore)

    // Get plural form of word ('s' if length is > 1)
    const plural = (length) => length > 1 ? 's' : ''

    return {filter, taskStore, plural,tasks, isLoading, totalCount, favoritesCount, favorites}
  },
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

/* Filter Navigation */
.filter {
  max-width: 640px;
  /*width: 640px;*/
  margin: 10px auto;
  text-align: right;
}

.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: .8em;
  font-size: 1em;
}

/* New task form */
.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}

/* Loading */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background-color: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}

/* Reset State button */
.reset-tasks, .reload-tasks {
  margin: 3rem auto;
  /* display: inline-block;*/
  text-align: center;
  display: block;
  background: #fff;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: .8em;
  font-size: 1em;
}
</style>