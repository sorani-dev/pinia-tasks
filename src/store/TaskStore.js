import {defineStore} from 'pinia'

export const useTaskStore = defineStore('taskStore',
    {
        state: () => ({
            tasks: [],
            isLoading: false,
        }),
        getters: {
            favorites() {
                return this.tasks.filter(t => t.isFav)
            },
            favoritesCount() {
                return this.tasks.reduce((p, current) => {
                    return current.isFav ? p + 1 : p
                }, 0)
            },
            totalCount(state) {
                return state.tasks.length
            }
        },
        actions: {
            async getTasks() {
                this.isLoading = true

                try {
                    const res = await fetch('http://localhost:3000/tasks')

                    if (res.ok) {
                        const data = await res.json()
                        this.tasks = data
                    }
                } catch (error) {
                    console.error(error)
                } finally {
                    this.isLoading = false
                }
            },
            addTask(task) {
                this.tasks.push(task)
            },
            deleteTask(id) {
                this.tasks = this.tasks.filter(t => t.id !== id)
            },
            toggleFavorites(id) {
                const task = this.tasks.find(t => t.id === id)
                task.isFav = !task.isFav
            }
        }
    })