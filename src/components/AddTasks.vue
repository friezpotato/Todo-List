<template>
    <div class="add_task">
        <form class="add_form">
            <h2 class="title_form">Название</h2>
            <input :placeholder="alertPlaceholder" @keyup="clearAlert" v-model="newTask.taskTitle" :class="{'input_alert': inputAlert}" class="input" type="text" autofocus>
            <h2 class="title_form">Описание</h2>
            <textarea v-model="newTask.taskDetails" class="input input_det" rows="15"></textarea>
        </form>
        <div class="group_button">
            <button @click="addTask" class="button button_form">Добавить</button>
            <button @click="resetTask" class="button button_form">Очистить</button>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                tasks: [],
                newTask: {
                    taskTitle: '',
                    taskDetails: ''
                },
                inputAlert: false,
                alertPlaceholder: ''           
            }
        },
        methods: {
            addTask: function(){
                if(this.newTask.taskTitle != ''){
                    this.tasks.push({
                    taskTitle: this.newTask.taskTitle,
                    taskDetails: this.newTask.taskDetails
                    })
                    this.newTask.taskTitle = '',
                    this.newTask.taskDetails = '',
                    this.alertPlaceholder = ''
                }
                else{
                    this.inputAlert = true
                    this.alertPlaceholder = 'Введите название задачи'
                }
            },
            resetTask: function(){
                this.newTask.taskTitle = '',
                this.newTask.taskDetails = ''
            },
            clearAlert: function(){
                if(this.newTask.taskTitle != ''){
                    this.inputAlert = false
                }
            }
        },
        watch: {
            
        },
    }
</script>

<style>
    .title_form {
        margin-top: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        align-self: end;
        color: rgb(85, 155, 129);
    }
    .add_form {
        margin-top: 20px;
        display: grid;
        grid-template-rows: repeat(5, max-content);
        grid-gap: 10px;
    }
    .input {
        height: 40px;
        outline: none;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px;
        padding-left: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
    }
    .input_det {
        padding: 20px;
        height: 200px;
    }
    .input_alert {
        background: rgb(255, 241, 241);;
        border: 1px solid rgb(230, 0, 0);
    }
    .input_alert::placeholder{
        color: rgb(230, 0, 0);
    }
    .group_button {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        justify-items: start;
        grid-gap: 10px;
    }
    .button_form {
        background: rgb(85, 155, 129);
        color: #fff;
    }
    .button_form:hover {
        background: rgb(128, 196, 171);
        border-color: rgb(128, 196, 171);
    }
</style>