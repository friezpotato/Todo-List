<template>
    <div class="wrapper">
        <app-header
        @changeTitle="isActive"
        />
        
        <app-add-tasks 
        v-show="title=='Добавить задачу'"
        />
        
        <app-unfinished-tasks 
        v-show="title=='Невыполненные задачи'"
        />

        <app-finished-tasks 
        v-show="title=='Выполненные задачи'"
        />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AddTasks from '@/components/AddTasks.vue';
import UnfinishedTask from '@/components/UnfinishedTask.vue';
import FinishedTask from '@/components/FinishedTask.vue';

export default {
    data(){
        return{
           title: '',
        }
    },
    methods: {
        isActive(){
            this.title = event.target.value
        }
    },
    mounted() {
        this.title = 'Добавить задачу'
    },
    components: {
        appHeader: Header,
        appAddTasks: AddTasks,
        appUnfinishedTasks: UnfinishedTask,
        appFinishedTasks: FinishedTask
    }
}
</script>

<style>
</style>
