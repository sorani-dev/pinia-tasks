import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore',
    {
        state: () => ({
            tasks: [
                {id: 1, title: "buy some milk", isFav: false},
                {id: 2, title: "play Sauerbraten", isFav: true},],
        }),
        getters: {
            favorites() {
                return this.tasks.filter(t => t.isFav)
            },
            favoritesCount() {
                return this.tasks.reduce((p, current) => {
                    return current.isFav ? p+1 : p
                }, 0)
            },
            totalCount(state) {
                return state.tasks.length
            }
        },
        actions: {
            addTask(task) {
                this.tasks.push(task)
            },
            deleteTask(id) {
                this.tasks= this.tasks.filter(t => t.id !== id)
            },
            toggleFavorites(id) {
                const task = this.tasks.find(t => t.id === id)
                task.isFav = !task.isFav
            }
        }
    })