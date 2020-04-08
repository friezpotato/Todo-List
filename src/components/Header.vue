<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="header_top">
                    <h1 v-text="title" class="title"></h1>
                    <form class="search_form">

                        <input 
                        @mousedown="searchActive = true"
                        @blur="searchActive = false"
                        v-model="search"
                        :style="[(searchActive == true) ? {'width': '400px'} : '']"
                        class="search_input"
                        type="text" 
                        placeholder="Поиск">
                        <button type="button" class="search_button button">
                            <svg class="bi bi-search" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                            </svg>
                        </button>

                    </form>
                </div>
            </div>
        </div>
        <div class="container">
            <header class="nav">
                <div class="button_group">

                    <router-link :to="'/'">
                        <button
                        @click="isActive"
                        value="Добавить задачу" 
                        :class="[(title=='Добавить задачу') ? 'button_active' : 'button']"
                        class="button_xl"
                        v-text="'Добавить задачу'"
                        ></button>
                    </router-link>
                    
                    <router-link :to="'/tasks'">
                        <button 
                        @click="isActive" 
                        value="Невыполненные задачи" 
                        :class="[(title=='Невыполненные задачи') ? 'button_active' : 'button']"
                        class="button_xl"
                        v-text="'Невыполненные задачи ' + TASKS.length"
                        ></button>
                    </router-link>
                    
                    <router-link :to="'/finishedTasks'">
                        <button 
                        @click="isActive"
                        value="Выполненные задачи" 
                        :class="[(title=='Выполненные задачи') ? 'button_active' : 'button']"
                        class="button_xl"
                        v-text="'Выполненные задачи ' + FINISHED_TASKS.length"
                        ></button>
                    </router-link>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
                title: 'Добавить задачу',
                visible: '',
                searchActive: false,
                search: ''
            }
        },
        computed: {
            ...mapGetters([
                'TASKS',
                'FINISHED_TASKS'
            ])
        },
        methods: {
            isActive(){
                this.title = event.target.value
            },
        },
    }
</script>

<style>
    .header {
        height: 70px;
        padding: 1px;
        background: rgb(85, 155, 129);
    }
    .header_top {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        align-items: center;
        justify-content: space-between
    }
    .title {
        justify-self: start;
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
        background: rgb(131, 185, 165);
        color: #fff;
        border: 1px solid rgb(131, 185, 165);
        transition: .5s;
    }
    .button_xl {
        padding: 15px 30px;
    }
    .search_form {
        display: grid;
        grid-template-columns: repeat(2, max-content);
    }
    .search_input {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        padding-left: 20px;
        border: none;
        border-radius: 5px 0 0 5px;
        outline: none;
        background: #fff;
    }
    .search_input::placeholder {
        color: rgb(85, 155, 129);
    }
    .search_button {
        width: 55px;
        padding-top: 10px;
        background: #fff;
        border-radius: 0 5px 5px 0;
        border: none;
        border-left: 1px solid rgb(85, 155, 129);
    }
    .search_button:hover {
        background: rgb(131, 185, 165);
        color: #fff;
    }
    .search_icon {
        padding-top: 3px;
        height: 20px;
    }
</style>