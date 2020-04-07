<template>
    <div id="app">
        <app-wrapper/>
    </div>
</template>

<script>
import wrapper from './components/Wrapper'
    export default {
        components: {
            'appWrapper': wrapper
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    };
    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    };
</style>