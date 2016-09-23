<template>
    <div class="m-banner" :style="{ backgroundImage: 'url(' + pattern + ')' }"></div>
</template>

<script>
    import Trianglify from 'trianglify'

    export default {
        name: 'Banner',

        data () {
            return {
                pattern: null
            }
        },
        created () {
            var pattern = Trianglify({
                width: 1500,
                height: 250
            }).png()

            this.$set('pattern', pattern)
        }
    }
</script>

<style lang="less" scoped>
    .m-banner {
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 250px;
        background-position: 50% 50%;
        background-size: cover;
    }
</style>
