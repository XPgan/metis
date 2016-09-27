<template>
    <div class="m-nav c-fix c-header">
        <ul>
            <li><a v-link="{ path: '/' }">首页</a></li>
            <li><a href="https://github.com/sunmengyuan/note/tree/master/vue/zone">源码</a></li>
        </ul>
        <div class="m-log">
            <a href="javascript:;">登录</a>
        </div>
    </div>
    <div class="m-dialog c-mask">
        <form enctype="multipart/form-data" id="form_login" class="zone-form">
            <div class="form-info c-center">
                <h3>登录</h3>
                <input type="text" id="nickname" name="nickname" placeholder="昵称" />
                <input type="password" id="password" name="password" placeholder="密码" />
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

            a:hover { text-decoration: underline; }
        }
    }
    form.zone-form .form-info {
        width: 250px;
        position: fixed;
    }
</style>
