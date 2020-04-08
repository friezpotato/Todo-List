export default {
    state: {
        tasks: [],
        finishedTasks: []
    },
    mutations: {
        ADD_TASK:(state, task) => {
            state.tasks[task.taskShow = false]
            state.tasks.push(task)
        },
        FINISH_TASK: (state, task) => {
            state.tasks[task.taskShow = false]
            state.finishedTasks.push(task)
        },
        DELETE_TASK_FROM_TASKS: (state, index) => {
            state.tasks.splice(index, 1)
        },
        DELETE_TASK_FROM_FINISHED_TASKS: (state, index) => {
            state.finishedTasks.splice(index, 1)
        },
    },
    actions: {
        ADD_TASK: ({commit}, task) => {
            commit('ADD_TASK', task)
        },
        FINISH_TASK: ({commit}, task) => {
            commit('FINISH_TASK', task)
        },
        DELETE_TASK_FROM_TASKS: ({commit}, index) => {
            commit('DELETE_TASK_FROM_TASKS', index)
        },
        DELETE_TASK_FROM_FINISHED_TASKS: ({commit}, index) => {
            commit('DELETE_TASK_FROM_FINISHED_TASKS', index)
        },
    },
    getters: {
        TASKS: state => state.tasks,
        FINISHED_TASKS: state => state.finishedTasks
    }
}