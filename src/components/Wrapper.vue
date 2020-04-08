<template>
    <div class="wrapper">
        <app-header/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    mounted() {
        this.title = 'Добавить задачу'
    },
    components: {
        appHeader: Header
    }
}
</script>

<style>
</style>
