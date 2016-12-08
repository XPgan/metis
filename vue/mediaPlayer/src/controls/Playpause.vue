<template>
    <button class="playpause pause"></button>
</template>

<script>
    export default {
        name: 'playpause'
    }
</script>

<style lang="less" scoped>
    @mainColor: #666;

    button.playpause {
        width: 20px;
        height: 20px;
        float: left;
        margin: 5px;
        padding: 6px 0;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 1px @mainColor;
        box-sizing: border-box;

        &:before, &:after {
            content: "";
            float: left;
        }
        &.play:after {
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-left-color: @mainColor;
            border-left-width: 8px;
        }
        &.pause:before, &.pause:after {
            width: 2px;
            height: 100%;
            background-color: @mainColor;
        }
        &.pause:before {
            margin-left: 7px;
        }
        &.pause:after {
            margin-left: 2px;
        }
    }
</style>
