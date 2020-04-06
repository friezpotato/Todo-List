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
                        <button class="button">Возобновить</button>
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
        }
    }
</script>

<style>

</style>