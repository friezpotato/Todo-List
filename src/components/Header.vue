<template>
    <div>
        <v-row
        justify="center"
        class="px-2"
        >
            <v-btn
                :to="'/'"
                class="ma-1 elevation-2"
                active-class="amber lighten-4"
                color="amber darken-1"
                height="50"
                rounded
                dark
                text
                >
                    <v-icon>fa-plus</v-icon>
            </v-btn>
            
            <v-badge 
            color="teal accent-4"
            :content="TASKS.length"
            :value="TASKS.length > 0 ? true : false"
            right
            offset-x="62%"
            offset-y="10"
            bordered
            >
                <v-btn
                :to="'/tasks'"
                class="ma-1 elevation-2"
                active-class="amber lighten-4"
                color="amber darken-1"
                height="50"
                rounded
                dark
                text
                >
                    <v-icon>fa-list-ul</v-icon>
                </v-btn>
            </v-badge>

            <v-badge 
            color="teal accent-4"
            :content="FINISH_TASKS.length"
            :value="FINISH_TASKS.length > 0 ? true : false"
            right
            offset-x="62%"
            offset-y="10"
            bordered
            >
                <v-btn
                :to="'/finishedTasks'"
                class="ma-1 elevation-2"
                active-class="amber lighten-4"
                color="amber darken-1"
                height="50"
                rounded
                dark
                text
                >
                    <v-icon>fa-tasks</v-icon>
                </v-btn>
            </v-badge>
        </v-row> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
            }
        },
        computed: {
            ...mapGetters([
                'TASKS',
                'FINISH_TASKS'
            ])
        },
    }
</script>

<style>
</style>