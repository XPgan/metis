<template>
    <button class="playpause play"></button>
</template>

<script>
    export default {
        name: 'playpause'
    }
</script>

<style lang="less" scoped>
    button.playpause {
        width: 30px;
        height: 30px;
        float: left;

        &.play {
            background-color: greenyellow;
        }
        &.pause {
            background-color: red;
        }
    }
</style>
