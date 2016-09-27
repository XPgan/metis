<template>
    <div class="m-nav c-fix c-header">
        <ul>
            <li><a v-link="{ path: '/' }">首页</a></li>
            <li><a href="https://github.com/sunmengyuan/note/tree/master/vue/zone">源码</a></li>
        </ul>
        <div class="m-log"><a href="javascript:;">登录</a><a v-link="{ path: '/register' }">注册</a></div>
    </div>
    <div class="c-mask">
        <form enctype="multipart/form-data" id="form_login" class="zone-form">
            <div class="form-info c-center">
                <h3>登录<a v-link="{ path: '/register' }">注册</a></h3>
                <input type="text" id="nickname" name="nickname" placeholder="昵称" />
                <input type="password" id="password" name="password" placeholder="密码" />
                <span>这里是提示信息</span>
                <div class="zone-btn"><a href="javascript:;">确定</a><a href="javascript:;">取消</a></div>
            </div>
        </form>
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
        background-color: rgba(0, 0, 0, 0.2);

        a { color: #fff; }
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
            margin: 0 -5px;

            a {
                margin: 0 5px;

                &:hover { text-decoration: underline; }
            }
        }
    }
    form.zone-form .form-info {
        width: 250px;
        position: fixed;

        h3 {
            position: relative;

            a {
                font-size: 12px;
                color: #999;
                text-decoration: underline;
                position: absolute;
                top: 0;
                right: 0;
            }
        }
    }
</style>
