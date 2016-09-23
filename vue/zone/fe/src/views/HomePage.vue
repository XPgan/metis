<template>
    <navigation></navigation>
    <user-info></user-info>
    <banner></banner>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import UserInfo from '../components/UserInfo.vue'
    import Banner from '../components/Banner.vue'

    export default {
        name: 'Homepage',
        components: {
            Navigation,
            UserInfo,
            Banner
        }
    }
</script>
