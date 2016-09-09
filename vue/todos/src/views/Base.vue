<template>
    <section class="l-mn c-center">
        <div class="m-input">
            <input type="text" placeholder="What needs to be done" />
            <a href="javascript:;">Add</a>
        </div>
        <div class="m-lst">
            <router-view></router-view>
        </div>
        <div class="m-tab">
            <ol>
                <li><a v-link="{path: '/all'}">All</a></li>
                <li><a v-link="{path: '/active'}">Active</a></li>
                <li><a v-link="{path: '/completed'}">Completed</a></li>
            </ol>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Base'
    }
</script>

<style lang="less" scoped>
    .l-mn {
        position: fixed;
        width: 500px;

        .m-input {
            position: relative;
            padding-right: 90px;

            input, a {
                display: block;
                font-size: 22px;
                line-height: 44px;
            }
            input {
                width: 100%;
                color: #666;
                border-bottom: 1px solid #42b983;
            }
            a {
                position: absolute;
                bottom: 0;
                right: 0;
                color: #fff;
                background-color: #42b983;
                padding: 0 20px;
            }
        }
    }
</style>
