<template>
    <navigation></navigation>
    <banner></banner>
    <router-view></router-view>
</template>

<script>
    import store from './vuex/store'
    import Navigation from './components/Navigation.vue'
    import Banner from './components/Banner.vue'

    export default {
        name: 'App',
        components: {
            Navigation,
            Banner
        },
        store
    }
</script>

<style src="./App.less" lang="less"></style>
