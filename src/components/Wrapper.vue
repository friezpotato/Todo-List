<template>
    <div>
        <v-container 
        fluid
        >
            <v-row 
            justify="center"
            >
                <v-col 
                cols="12"
                md="6" 
                sm="8"
                class="py-1"
                >
                        <v-header/>
                        <v-content
                        class="py-3">
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </v-content>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name: 'App',
    components: {
        'v-header': Header
    }
};
</script>
<style>
</style>
