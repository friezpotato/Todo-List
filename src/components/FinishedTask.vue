<template>
    <div class="finished-task">
        <div class="container">
            <div class="task_box">
                <div v-for="(task, index) in FINISH_TASK" :key="index" :index="(index)" class="task">
                    <h1
                    v-text="task.title" 
                    class="task_title"
                    @click="task.taskShow = !task.taskShow"
                    ></h1>

                    <span
                    v-text="task.details" 
                    class="task_details"
                    v-show="task.taskShow"
                    ></span>
                    <div v-show="task.taskShow" class="task_buttons">
                        <button @click="recover(index)" class="button_sm">Возобновить</button>
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
                'FINISH_TASK'
            ])
        },
        methods: {
            recover(index){
                this.FINISH_TASK[index].taskShow = false
                this.$store.dispatch('ADD_TASK', this.FINISH_TASK[index])
                this.$store.dispatch('DELETE_FROM_FINISH_TASKS', index)
            }
        },
    }
</script>

<style>

</style>