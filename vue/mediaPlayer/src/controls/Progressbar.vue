<template>
    <div class="progressbar">
        <div class="bar-outer"></div>
        <div class="bar-inner"></div>
    </div>
</template>

<script>
    export default {
        name: 'progressbar'
    }
</script>

<style lang="less" scoped>
    .progressbar {
        height: 5px;
        margin: 0 -2px;
        position: relative;

        .bar-outer, .bar-inner {
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
        }
        .bar-outer {
            width: 100%;
            background-color: rgba(255, 255, 255, 0);
            box-shadow: inset 0 0 1px #999;
            z-index: 2;
        }
        .bar-inner {
            width: 70%;
            background-color: gold;
            z-index: 1;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
        }
    }
</style>
