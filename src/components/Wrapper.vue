<template>
    <div class="wrapper">
        <app-header/>
        <keep-alive>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </keep-alive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    components: {
        'app-header': Header
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    }
</style>
