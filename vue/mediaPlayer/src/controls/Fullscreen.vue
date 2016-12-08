<template>
    <button class="fullscreen"></button>
</template>

<script>
    export default {
        name: 'fullscreen'
    }
</script>

<style lang="less" scoped>
    @mainColor: #666;

    button.fullscreen {
        width: 20px;
        height: 20px;
        margin: 5px;
        float: right;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 1px @mainColor;
    }
</style>
