<template>
    <li><span class="c-vertical"></span>这里是一段文字</li>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
    @green: #42b983;
    @lightGrey: #a9a9a9;
    @midGrey: #999;
    @darkGrey: #666;
    @borderGrey: #f0f0f0;

    li {
        position: relative;
        font-size: 18px;
        line-height: 26px;
        border-bottom: 1px solid @borderGrey;
        padding: 14px 20px 14px 50px;
        cursor: pointer;

        span {
            position: absolute;
            left: 20px;
            display: block;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 1px solid transparent;
        }

        &:last-child {
            border-bottom: none;
        }

        &.active { color: @darkGrey; }
        &.completed { color: @lightGrey;text-decoration: line-through; }
        &.active span { border-color: @midGrey;background-color: transparent; }
        &.completed span { border-color: @green;background-color: @green; }
    }
</style>
