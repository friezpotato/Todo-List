<template>
    <div class="finished-task">
        <div class="container">
            <div class="task_box">
                <div 
                v-for="(task, index) in FINISHED_TASKS" 
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

                        <div class="task_buttons">
                            <button @click="recover(index)" class="button_sm">Возобновить</button>
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
                'FINISHED_TASKS'
            ])
        },
        methods: {
            recover(index){
                let ask = confirm('Восстановить эту задачу?')
                    if(ask == true){
                    this.$store.dispatch('ADD_TASK', this.FINISHED_TASKS[index])
                    this.$store.dispatch('DELETE_TASK_FROM_FINISHED_TASKS', index)
                }
            },
            deleteTask(index){
                let ask = confirm('Вы уверены, что хотите удалить эту задачу?')
                if(ask == true){
                    this.$store.dispatch('DELETE_TASK_FROM_FINISHED_TASKS', index)
                }
            }
        },
    }
</script>

<style>

</style>