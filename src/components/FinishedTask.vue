<template>
    <div class="finished-task">
        <div class="container">
            <div class="task_box">
                <div v-for="(task, index) in finishTasks" :key="index" :index="(index)" class="task">
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
    export default {
        props: {
            finishTasks: Array
        },
        data() {
            return {
                recoverTask: {},
            }
        },
        methods: {
            recover(index){
                let ask = confirm('Восстановить эту задачу?')
                if(ask == true){
                    this.recoverTask.title = this.finishTasks[index].title,
                    this.recoverTask.details = this.finishTasks[index].details,
                    this.recoverTask.taskShow = false
                    this.$emit('recover', this.recoverTask)
                    this.finishTasks.splice(index, 1)
                }
            }
        },
    }
</script>

<style>

</style>