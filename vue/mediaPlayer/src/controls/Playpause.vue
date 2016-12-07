<template>
    <button class="playpause play"></button>
</template>

<script>
    export default {
        name: 'playpause'
    }
</script>

<style lang="less" scoped>
    @mainColor: #0e926d;

    button.playpause {
        width: 20px;
        height: 20px;
        float: left;
        margin: 5px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 1px @mainColor;

        &.play:after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            margin-left: 7px;
            border: 5px solid transparent;
            border-left-color: @mainColor;
            border-left-width: 8px;
        }
        &.pause {

        }
    }
</style>
