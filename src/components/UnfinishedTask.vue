<template>
    <div class="unfinished-task">
        <div class="container">
            <div class="task_box">
                <div v-for="(task, index) in tasks" :key="index" :index="(index)" class="task">
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
                        <button @click="finishButton(index)" class="button">Выполнено</button>
                        <button class="button button_edit">Редактировать</button>
                        <button class="button button_del">Удалить</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tasks: Array,
        },
        name: 'v-unfinished-task',
        data() {
            return {
                finishTasks: []
            }
        },
        methods: {
            finishButton(index){
                this.finishTasks.push({
                    title: this.tasks[index].title,
                    details: this.tasks[index].details,
                    taskShow: false
                })
                this.$emit('finish', this.finishTasks)
                this.tasks.splice(index, 1)
            }
        },
    }
</script>

<style>
    .task_box {
        margin-top: 20px;
        display: grid;
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
    }
    .task_details {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding: 7px 15px;
        color: rgb(85, 155, 129);
    }
    .task_buttons {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-gap: 5px;
        margin: 10px
    }
    .button_icon_done, .button_icon_edit, .button_icon_del {
        padding: 7px 8px 2px 8px;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s;
        background: #fff;
    }
    .button_done {
        border: 1px solid rgb(85, 155, 129);
    }
    .button_done:hover {
        background: rgb(85, 155, 129);
    }
    .button_edit {
        border: 1px solid rgb(255, 189, 46);
        color: rgb(255, 189, 46);
    }
    .button_edit:hover {
        background: rgb(255, 189, 46);
    }
    .button_del {
        border: 1px solid rgb(202, 32, 32);
        color: rgb(202, 32, 32);
    }
    .button_del:hover {
        background: rgb(202, 32, 32);
    }
</style>