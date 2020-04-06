<template>
    <div id="app">
        <v-header 
        :tasks="tasks"
        :finishTasks="finishTasks"
        @changeTitle="isActive"
        />

        <v-add-tasks 
        v-show="title=='Добавить задачу'" 
        @addTasks="addTasks"
        />

        <v-unfinished-tasks 
        v-show="title=='Невыполненные задачи'"
        :tasks="tasks"
        @finish="finish"
        />

        <v-finished-tasks 
        v-show="title=='Выполненные задачи'"
        :finishTasks="finishTasks"
        @recover="recover"
        />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AddTasks from '@/components/AddTasks.vue';
import UnfinishedTask from '@/components/UnfinishedTask.vue';
import FinishedTask from '@/components/FinishedTask.vue';

export default {
    name: 'App',
    data(){
        return{
           title: '',
           tasks: [],
           finishTasks: [],
           recoverTask: {}
        }
    },
    methods: {
        isActive(){
            this.title = event.target.value
        },
        addTasks(data){
            this.tasks = data
        },
        finish(data){
            this.finishTasks = data
        },
        recover(data){
            this.recoverTask = data
            this.tasks.push({
                title: this.recoverTask.title,
                details: this.recoverTask.details,
                taskShow: false
            })
        }
    },
    mounted() {
        this.title = 'Добавить задачу'
    },
    components: {
        'v-header': Header,
        'v-add-tasks': AddTasks,
        'v-unfinished-tasks': UnfinishedTask,
        'v-finished-tasks': FinishedTask
    }
}
</script>

<style>
    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
</style>
