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

    .center () {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
    }

    div.volume {
        float: right;
        margin: 5px;

        .decrease, .increase {
            width: 20px;
            height: 20px;
            float: left;
            position: relative;
            margin: 0 2px;
            border-radius: 3px;
            background-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 1px @mainColor;
        }
        .decrease:after {
            content: "";
            display: block;
            position: absolute;
            width: 6px;
            height: 2px;
            background-color: @mainColor;

            .center();
        }
    }
</style>
