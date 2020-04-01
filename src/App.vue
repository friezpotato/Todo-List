<template>
    <div id="app">
        <div class="header">
            <div class="container">
                <div class="group_title">
                    <h1 class="title">Задачи</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <header class="nav">
                <button class="button">Добавить задачу</button>
                <button class="button">Невыполненные задачи</button>
                <button class="button">Выполненные задачи</button>
                <form class="search_form">
                    <input class="search_input" type="text" placeholder="Поиск">
                    <button class="search_button button">
                        <svg class="search_icon" enable-background="new 0 0 40 40" id="Слой_1" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M15.3,30.9C6.8,30.9-0.1,24-0.1,15.5S6.8,0,15.3,0S30.8,7,30.8,15.5c0,1.2-0.1,2.4-0.4,3.6c-0.1,0.5-0.7,0.9-1.2,0.7   c-0.5-0.1-0.9-0.7-0.7-1.2c0.2-1,0.4-2,0.4-3.1c0-7.4-6-13.5-13.5-13.5S1.9,8.1,1.9,15.5s6,13.5,13.5,13.5c1.1,0,2.1-0.1,3.2-0.4   c0.5-0.1,1.1,0.2,1.2,0.7c0.1,0.5-0.2,1.1-0.7,1.2C17.8,30.8,16.6,30.9,15.3,30.9z"/></g><g><path d="M36.4,40c-0.9,0-1.8-0.4-2.5-1l-11-11c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l11,11c0.6,0.6,1.6,0.6,2.1,0   c0.6-0.6,0.6-1.6,0-2.1l-11-11c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l11,11c1.4,1.4,1.4,3.6,0,5C38.2,39.6,37.3,40,36.4,40z"/></g><g><path d="M15.3,27C9,27,3.8,21.8,3.8,15.5S9,4,15.3,4s11.5,5.2,11.5,11.5S21.7,27,15.3,27z M15.3,6c-5.2,0-9.5,4.3-9.5,9.5   s4.3,9.5,9.5,9.5s9.5-4.3,9.5-9.5S20.6,6,15.3,6z"/></g></svg>
                    </button>
                </form>
            </header>
          
        </div>
    </div>
</template>

<script>


export default {
    name: 'App',
    data(){
        return{
            
        }
    },
    methods: {
       
    },
    computed: {
        
    },
}
</script>

<style>
    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
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
    .group_title {
        height: 70px;
        display: grid;
        justify-items: space-between;
        align-items: center;
    }
    .title {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
    }
    .nav {
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 2fr;
        justify-content: start;
        align-content: center;
        grid-gap: 5px;
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
        padding-left: 30px;
        border: 1px solid rgb(85, 155, 129);
        border-radius: 5px 0 0 5px;
        outline: none;
    }
    .search_input::placeholder {
        color: rgb(85, 155, 129);
    }
    .search_button {
        width: 60px;
        background: rgb(85, 155, 129);
        border-radius: 0 5px 5px 0;
    }
    .search_button:hover {
        width: 60px;
        background: rgb(128, 196, 171);
        border-color: rgb(128, 196, 171);
        border-radius: 0 5px 5px 0;
    }
    .search_icon {
        fill: rgb(255, 255, 255);
    }
</style>
