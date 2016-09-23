<template>
    <div class="m-nav c-fix c-header">
        <ul>
            <li><a v-link="{ path: '/' }">首页</a></li>
            <li><a v-link="{ path: '/profile' }">个人页</a></li>
        </ul>
        <div class="m-log">
            <a href="javascript:;">登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="less" scoped>
    .m-nav {
        line-height: 22px;
        padding: 20px 15px;

        a {
            color: #fff;
            text-shadow: 1px 1px 3px #949494;
        }
        ul {
            float: left;
            margin: 0 -15px;

            li {
                float: left;
                font-size: 22px;
                padding: 0 15px;
                border-right: 1px solid rgba(255, 255, 255, 0.3);

                &:last-child { border-right: none; }
            }
        }
        .m-log {
            float: right;
            font-size: 16px;

            a:hover { text-decoration: underline; }
        }
    }
</style>
