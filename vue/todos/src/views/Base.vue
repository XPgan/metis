<template>
    <section class="l-mn c-center">
        <div class="m-input">
            <input type="text" placeholder="What needs to be done" />
            <a href="javascript:;">Add</a>
        </div>
        <div class="m-lst">
            <router-view></router-view>
        </div>
        <div class="m-tabs">
            <a v-link="{path: '/all'}">All</a>
            <a v-link="{path: '/active'}">Active</a>
            <a v-link="{path: '/completed'}">Completed</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Base'
    }
</script>

<style lang="less" scoped>
    @red: #ffd6d6;
    @green: #42b983;
    @lightGrey: #a9a9a9;
    @midGrey: #999;
    @darkGrey: #666;
    @shadowGrey: #e6e6e6;

    .l-mn {
        position: fixed;
        width: 500px;
        background-color: #fff;
        overflow: hidden;

        .m-input {
            position: relative;
            padding: 0 110px 0 20px;
            border-bottom: 1px solid @green;

            input, a {
                display: block;
                font-size: 22px;
                line-height: 56px;
            }
            input {
                width: 100%;
                color: @darkGrey;

                &::-webkit-input-placeholder {
                    color: @lightGrey;
                }
            }
            a {
                position: absolute;
                bottom: 0;
                right: 0;
                color: #fff;
                background-color: @green;
                padding: 0 25px;
            }
        }
        .m-tabs {
            text-align: center;
            padding: 20px 0;
            box-shadow: 0 0 1px 2px @shadowGrey;

            a {
                display: inline-block;
                font-size: 16px;
                line-height: 28px;
                color: @midGrey;
                border: 1px solid transparent;
                border-radius: 4px;
                padding: 0 15px;

                &.active {
                    color: @darkGrey;
                    border-color: @red;
                }
            }
        }
    }
</style>
