<template>
    <div>
        <v-form>
            <v-text-field
            label='Название'
            v-model="task.title"
            class="font-weight-light"
            color="teal accent-4"
            hide-details="auto"
            counter="40"
            hint="Не более 40 символов"
            solo
            :error-messages="errorNameTask"
            @blur="errorNameTask = ''"
            @keydown.enter="addTask"
            autofocus
            >
            </v-text-field>
            
            <v-textarea
            label='Описание'
            v-model="task.details"
            class="font-weight-light"
            color="teal accent-4"
            rows="13"
            solo
            :error-messages="errorDetailsTask"
            @blur="errorDetailsTask = ''"
            @keydown.ctrl.enter.prevent.exact="addTask"
            ></v-textarea>
        </v-form>
        <v-row
        justify="center"
        >
            <v-btn
            v-for="button in buttons" :key="button.name"
            type="button"
            @click="button.click"
            class="text-none subtitle-1 mx-1 mt-n3 elevation-2"
            :color="button.color"
            large
            text
            rounded
            > {{button.name}} </v-btn>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: {
                    title: '',
                    details: '',
                    id: 1
                },
                buttons: [
                    {name: 'Добавить', color: 'teal accent-4', click: this.addTask},
                    {name: 'Очистить', color: 'amber darken-3', click: this.resetTask}
                ],
                errorNameTask: '',
                errorDetailsTask: ''
            }
        },
        methods: {
            addTask(){
                if(!!this.task.title && !!this.task.details){
                    this.$store.dispatch('ADD_TASK', this.task)
                    this.task.title = '',
                    this.task.details = '',
                    this.task.id++
                }
                else if(!this.task.title){
                    this.errorNameTask = 'А как же название?'
                }
                else{
                    this.errorDetailsTask = 'Подробности не помешали бы...'
                }
            },
            resetTask(){
                this.task.title = '',
                this.task.details = ''
            },
        },
    }
</script>

<style>
</style>