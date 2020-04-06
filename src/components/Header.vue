<template>
    <div>
        <div class="header">
            <div class="container">
                <h1 v-text="title" class="title"></h1>
            </div>
        </div>
        <div class="container">
            <header class="nav">
                <div class="button_group">
                    <button @click="isActive" value="Добавить задачу" class="button">Добавить задачу</button>
                    <button @click="isActive" value="Невыполненные задачи" class="button">Невыполненные задачи</button>
                    <button @click="isActive" value="Выполненные задачи" class="button">Выполненные задачи</button>
                </div>
                <form class="search_form">
                    <input class="search_input" type="text" placeholder="Поиск">
                    <button class="search_button button">
                        <svg class="search_icon" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.1 26.1" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26.1 26.1">
                        <path d="m25.806,22.9l-5.4-5.4c-0.2-0.2-0.2-0.4-0.1-0.6 1.1-1.7 1.7-3.7 1.7-5.9 0-6.1-4.9-11-11-11s-11,4.9-11,11 4.9,11 11,11c2.2,0 4.2-0.6 5.9-1.7 0.2-0.1 0.5-0.1 0.6,0.1l5.4,5.4c0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.5-0.5 0.5-1.1 0.1-1.5zm-14.7-4.9c-3.9,0-7-3.1-7-7s3.1-7 7-7 7,3.1 7,7-3.1,7-7,7z"/>
                        </svg>
                    </button>
                </form>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-header',
    data(){
        return{
            title: '',
            visible: ''
        }
    },
    methods: {
        isActive(){
            this.title = event.target.value
            this.$emit('changeTitle', this.title)
        },
    },
    mounted() {
        this.title = 'Добавить задачу'
    },
}
</script>

<style>
    .header {
        height: 70px;
        padding: 1px;
        background: rgb(85, 155, 129);
    }
    .container {
        max-width: 1080px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .title {
        margin-top: 17px;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        transition: .5s;
    }
    .nav {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-content: center;
        grid-gap: 5px;
    }
    .button_group {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        grid-gap: 10px;
    }
    .button {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        padding: 7px 15px;
        outline: none;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px;
        background: #fff;
        color: rgb(85, 155, 129);
        cursor: pointer;
    }
    .button_active {
        background: rgb(85, 155, 129);
        color: #fff;
        transition: .5s;
    }
    .button:hover {
        background: rgb(85, 155, 129);
        color: #fff;
        transition: .5s;
    }
    .search_form {
        display: grid;
        grid-template-columns: 4fr 1fr;
        justify-self: end;
    }
    .search_input {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        padding-left: 20px;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px 0 0 5px;
        outline: none;
    }
    .search_input::placeholder {
        color: rgb(85, 155, 129);
    }
    .search_button {
        margin-left: -2px;
        background: rgb(85, 155, 129);
        border-radius: 0 5px 5px 0;
    }
    .search_button:hover {
        background: rgb(128, 196, 171);
        border-color: rgb(128, 196, 171);
    }
    .search_icon {
        padding-top: 3px;
        height: 20px;
        fill: rgb(255, 255, 255);
    }
</style>