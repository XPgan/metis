<template>
    <navigation></navigation>
    <banner></banner>
    <router-view></router-view>
    <div class="pendant"></div>
    <div class="zone-ctrls">
        <a href="javascript:;" class="ctrl-gotop"><span></span></a>
    </div>
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

<style src="./assets/style/init.less" lang="less"></style>
<style src="./assets/style/public.less" lang="less"></style>
<style src="./assets/style/app.less" lang="less"></style>
<style lang="less" scoped>
    .pendant {
        width: 89px;
        height: 310px;
        background: url('./assets/img/pendant.png') no-repeat 0 50%;
        background-size: 89px auto;
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: -2;
    }
    a.ctrl-gotop {
        right: 20px;
        bottom: 30px;

        span { background-position: 50% -48px; }
    }

    @media screen and (max-width: 600px) {
        .pendant { display: none; }
    }
</style>
