<template>
    <div class="volume">
        <span class="decrease"></span>
        <span class="increase"></span>
    </div>
</template>

<script>
    export default {
        name: 'volume'
    }
</script>

<style lang="less" scoped>
    @mainColor: #666;

    div.volume {
        float: right;
        margin: 5px;

        .decrease, .increase {
            width: 20px;
            height: 20px;
            float: left;
            margin: 0 2px;
            border-radius: 3px;
            background-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 1px @mainColor;
        }
    }
</style>
