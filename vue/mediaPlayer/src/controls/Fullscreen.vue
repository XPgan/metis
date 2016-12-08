<template>
    <button class="fullscreen trigger"></button>
</template>

<script>
    export default {
        name: 'fullscreen'
    }
</script>

<style lang="less" scoped>
    @mainColor: #666;

    .rotate (@deg) {
        -webkit-transform: rotate(@deg);
                transform: rotate(@deg);
    }

    button.fullscreen {
        width: 20px;
        height: 20px;
        margin: 5px;
        float: right;
        position: relative;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 1px @mainColor;

        &:before, &:after {
            content: "";
            display: block;
            position: absolute;
            width: 0;
            height: 0;
            border: 2px solid transparent;
        }
        &:before {
            border-left-color: @mainColor;
            border-left-width: 8px;
        }
        &:after {
            border-right-color: @mainColor;
            border-right-width: 8px;
        }
        &.cancel:before {
            .rotate(-45deg);

            left: 3px;
            bottom: 6px;
        }
        &.cancel:after {
            .rotate(-45deg);

            right: 3px;
            top: 6px;
        }
    }
</style>
