<template>
    <div class="unfinished-task">
        <div class="container">
            <div class="task_box">
                <div 
                v-for="(task, index) in TASKS" 
                :key="index" 
                :index="(index)" 
                class="task">

                    <h1
                    v-text="task.title"
                    class="task_title"
                    @click="task.taskShow = !task.taskShow"
                    ></h1>

                    <div v-show="task.taskShow">
                        <span
                        v-text="task.details"
                        class="task_details"
                        ></span>
                    
                        <div class="task_buttons" key="buttons">
                            <button @click="finishButton(index)" class="button_sm">Выполнено</button>
                            <button @click="deleteTask(index)" class="button_sm button_del">
                                <svg class="bi bi-trash" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'TASKS'
            ])
        },
        methods: {
            finishButton(index){
                let ask = confirm('Вы выполнили эту задачу?')
                if(ask == true){
                    this.$store.dispatch('FINISH_TASK', this.TASKS[index])
                }
                this.$store.dispatch('DELETE_TASK_FROM_TASKS', index)
            },
            deleteTask(index){
                let ask = confirm('Вы уверены, что хотите удалить эту задачу&')
                if(ask == true){
                    this.$store.dispatch('DELETE_TASK_FROM_TASKS', index)
                }
            }
        },
    }
</script>

<style>
    .task_box {
        margin-top: 20px;
    }
    .task {
        display: grid;
        grid-template-rows: repeat(2, max-content);
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .task_title {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        background: rgb(85, 155, 129);
        padding: 7px 15px;
        color: #fff;
        cursor: pointer;
        outline: none;
        border: none;
    }
    .task_details {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding: 0px 15px;
        margin: 7px 0;
        color: rgb(85, 155, 129);
        outline: none;
        border: none;
    }
    .task_buttons {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        justify-content: end;
        grid-gap: 5px;
        margin: 10px
    }
    .button_sm {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 12px;
        padding: 5px 7px;
        outline: none;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px;
        background: #fff;
        color: rgb(85, 155, 129);
        cursor: pointer;
        transition: .5s;
    }
    .button_sm:hover {
        background: rgb(85, 155, 129);
        color: #fff;
    }
    .button_edit {
        border: 1px solid rgb(255, 189, 46);
        color: rgb(255, 189, 46);
    }
    .button_edit:hover {
        background: rgb(255, 189, 46);
    }
    .button_del {
        padding-top: 7px;
        padding-bottom: 3px;
        border: 1px solid rgb(202, 32, 32);
        color: rgb(202, 32, 32);
    }
    .button_del:hover {
        background: rgb(202, 32, 32);
    }
</style>