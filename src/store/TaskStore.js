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
        }
    })