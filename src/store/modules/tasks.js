export default {
    state: {
        tasks: [],
        finishTasks: []
    },
    mutations: {
        ADD_TASK:(state, task) => {
            state.tasks.push(task)
        },
        FINISH_TASK: (state, task) => {
            let ask = confirm('Вы выполнили эту задачу?')
            if(ask == true){
                state.finishTasks.push(task)
            }
        },
        DELETE_FROM_TASKS: (state, index) => {
            state.tasks.splice(index, 1)
        },
        DELETE_FROM_FINISH_TASKS: (state, index) => {
            let ask = confirm('Восстановить эту задачу?')
            if(ask == true){
                state.finishTasks.splice(index, 1)
            }
        },
    },
    actions: {
        ADD_TASK: ({commit}, task) => {
            commit('ADD_TASK', task)
        },
        FINISH_TASK: ({commit}, task) => {
            commit('FINISH_TASK', task)
        },
        DELETE_FROM_TASKS: ({commit}, index) => {
            commit('DELETE_FROM_TASKS', index)
        },
        DELETE_FROM_FINISH_TASKS: ({commit}, index) => {
            commit('DELETE_FROM_FINISH_TASKS', index)
        },
    },
    getters: {
        TASKS: state => state.tasks,
        FINISH_TASK: state => state.finishTasks
    }
}