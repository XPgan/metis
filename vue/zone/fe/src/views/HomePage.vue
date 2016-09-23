<template>
    <navigation></navigation>
    <personal-info></personal-info>
</template>

<script>
    import Navigation from '../components/Navigation.vue'
    import PersonalInfo from '../components/PersonalInfo.vue'

    export default {
        name: 'Homepage',
        components: {
            Navigation,
            PersonalInfo
        }
    }
</script>
