<template>
    <v-app id="app">
        <v-wrapper></v-wrapper>
    </v-app>
</template>

<script>
import Wrapper from '@/components/Wrapper.vue';
export default {
    name: 'App',
    components: {
        'v-wrapper': Wrapper
    }
};
</script>
<style>
</style>
