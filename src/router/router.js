import Vue from 'vue'
import Router from 'vue-router'

import AddTasks from '../components/AddTasks'
import UnfinishedTask from '../components/UnfinishedTask'
import FinishedTask from '../components/FinishedTask'

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'addTasks',
            component: AddTasks,
            props: true
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: UnfinishedTask,
            props: true
        },
        {
            path: '/finishedTasks',
            name: 'finishedTasks',
            component: FinishedTask,
            props: true
        }
    ]
})

export default router