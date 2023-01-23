<template>
  <main>
    <!-- Heading -->
    <header>
      <img src="./assets/logo.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>


    <!-- Filter bar   -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favorites'">Favorite tasks</button>
    </nav>

    <!-- Task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} task{{ plural }} left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>

    <!-- Favorites task list -->
    <div class="task-list" v-if="filter === 'favorites'">
      <p>Your have {{ taskStore.favoritesCount }} favorite{{ plural }} left to do</p>
      <div v-for="task in taskStore.favorites" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

import { useTaskStore } from "@/store/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()

    const filter = ref('all')
    const plural = taskStore.tasks.length > 1 ? 's' : ''

    return { filter, taskStore, plural }
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
</style>