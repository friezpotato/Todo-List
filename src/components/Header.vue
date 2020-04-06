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
                    <button @click="isActive" value="Добавить задачу" :class="[(title=='Добавить задачу') ? 'button_active' : 'button']">Добавить задачу</button>
                    <button @click="isActive" value="Невыполненные задачи" :class="[(title=='Невыполненные задачи') ? 'button_active' : 'button']">Невыполненные задачи</button>
                    <button @click="isActive" value="Выполненные задачи" :class="[(title=='Выполненные задачи') ? 'button_active' : 'button']">Выполненные задачи</button>
                </div>
                <form class="search_form">
                    <input class="search_input" type="text" placeholder="Поиск">
                    <button class="search_button button">
                        <svg class="bi bi-search" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
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
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        padding: 7px 15px;
        outline: none;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px;
        cursor: pointer;
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
        padding-top: 10px;
        margin-left: -2px;
        background: rgb(85, 155, 129);
        border-radius: 0 5px 5px 0;
        color: #fff;
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