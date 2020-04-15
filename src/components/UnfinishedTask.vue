<template>
    <div>
        <v-slide-y-transition
        group
        leave-absolute
        hide-on-leave
        >
            <v-expansion-panels 
            v-for="task in TASKS" :key="task.id" :index="task.id"
            multiple
            hover
            >
                <v-expansion-panel
                class="mb-1"
                >
                    <v-expansion-panel-header
                    class="body-1"
                    >
                    {{task.title}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content
                    class="font-weight-light body-2">
                    {{task.details}}
                        <v-row
                        justify="end"
                        >
                            <v-btn
                            v-for="button in buttons" :key="button.name"
                            @click="button.click(task.id)"
                            class="text-none body-2 mx-1 mt-2 elevation-2"
                            text
                            rounded
                            :color="button.color"
                            > {{button.name}} </v-btn>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-slide-y-transition>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
                buttons: [
                    {name: 'Завершить', color: 'teal accent-4', click: this.FINISH_TASK},
                    {name: 'Удалить', color: 'red', click: this.DELETE_TASK}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'TASKS'
            ])
        },
        methods: {
            ...mapActions([
                'FINISH_TASK',
                'DELETE_TASK'
            ])
        }
    }
</script>

<style>
</style>