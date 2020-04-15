<template>
    <div>
        <v-slide-y-transition
        group
        leave-absolute
        hide-on-leave
        >
            <v-expansion-panels 
            v-for="task in FINISH_TASKS" :key="task.id" :index="task.id"
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
            <v-row
            justify="center"
            key="btn"
            >
                <v-btn
                v-if="FINISH_TASKS.length > 0"
                type="button"
                @click="CLEAR_FINISH_TASKS"
                class="text-none subtitle-1 mx-1 mt-4 elevation-2"
                color="amber darken-3"
                large 
                text 
                rounded
                >Очистить
                </v-btn>
            </v-row>
        </v-slide-y-transition>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
                buttons: [
                    {name: 'Восстановить', color: 'teal accent-4', click: this.RECOVER_TASK},
                    {name: 'Удалить', color: 'red', click: this.DELETE_TASK}
                ]
            }
        },
        computed: {
            ...mapGetters([
                'FINISH_TASKS'
            ])
        },
        methods: {
            ...mapActions([
                'RECOVER_TASK',
                'DELETE_TASK',
                'CLEAR_FINISH_TASKS'
            ])
        },
    }
</script>

<style>

</style>