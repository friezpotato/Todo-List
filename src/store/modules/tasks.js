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
            state.finishTasks.push(task)
        },
        DELETE_FROM_TASKS: (state, index) => {
            state.tasks.splice(index, 1)
        },
        DELETE_FROM_FINISH_TASKS: (state, index) => {
            state.finishTasks.splice(index, 1)
        },
    },
    getters: {
        TASKS(state){
            return state.tasks
        },
        FINISH_TASK(state){
            return state.finishTasks
        }
    }
}