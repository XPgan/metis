<template>
    <button
        class="playpause"
        :class="status"
        @click="playpause">
    </button>
</template>

<script>
    export default {
        name: 'playpause',
        data () {
            return {
                status: 'play'
            }
        },
        methods: {
            playpause () {
                switch (this.status) {
                    case 'play':
                        this.status = 'pause'
                        this.$emit('play')
                        break
                    case 'pause':
                        this.status = 'play'
                        this.$emit('pause')
                        break
                }
            }
        }
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
            margin-left: 7px;
            border: 4px solid transparent;
            border-left-color: @mainColor;
            border-left-width: 7px;
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
