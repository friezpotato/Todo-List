import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        ADD_TASK:(state, task) => {
            state.tasks.push({
                id: task.id,
                title: task.title,
                details: task.details,
                finish: false
            })
        },
        FINISH_TASK: (state, id) => {
            const index = state.tasks.findIndex(task => task.id == id)
            state.tasks[index].finish = true
        },
        DELETE_TASK: (state, id) => {
            const index = state.tasks.findIndex(task => task.id == id)
            state.tasks.splice(index, 1)
        },
        RECOVER_TASK: (state, id) => {
            const index = state.tasks.findIndex(task => task.id == id)
            state.tasks[index].finish = false
        },
        CLEAR_FINISH_TASKS: (state) => {
            let finishArr = state.tasks.filter(task => task.finish == true)
            state.tasks = state.tasks.filter(i => !finishArr.includes(i))
        }
    },
    actions: {
        ADD_TASK: ({commit}, task) => commit('ADD_TASK', task),
        FINISH_TASK: ({commit}, id) => commit('FINISH_TASK', id),
        DELETE_TASK: ({commit}, id) => commit('DELETE_TASK', id),
        RECOVER_TASK: ({commit}, id) => commit('RECOVER_TASK', id),
        CLEAR_FINISH_TASKS: ({commit}) => commit('CLEAR_FINISH_TASKS')
    },
    getters: {
        TASKS: state => state.tasks.filter(task => task.finish === false),
        FINISH_TASKS: state => state.tasks.filter(task => task.finish === true)
    }
})