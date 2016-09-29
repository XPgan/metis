<template>
    <div class="m-nav c-fix c-header">
        <ul>
            <li><a v-link="{ path: '/' }">首页</a></li>
            <li><a href="https://github.com/sunmengyuan/note/tree/master/vue/zone">源码</a></li>
        </ul>
        <div class="m-log">
            <a href="javascript:;" @click="toggleLogin">登录</a>
            <a v-link="{ path: '/register' }">注册</a>
        </div>
    </div>
    <div class="c-mask" v-show="login.show">
        <form enctype="multipart/form-data" id="form_login" class="zone-form form-login">
            <div class="form-info c-center">
                <h3>登录<a v-link="{ path: '/register' }">注册</a></h3>
                <input
                    type="text" placeholder="用户名"
                    v-model="login.body.nickname" />
                <input
                    type="password" placeholder="密码"
                    v-model="login.body.password" />
                <span>{{ login.message }}</span>
                <div class="zone-btns">
                    <a href="javascript:;" @click="requestLogin">确定</a>
                    <a href="javascript:;" @click="toggleLogin">取消</a>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import publicMethods from '../assets/script/public'

    export default {
        name: 'Navigation',
        vuex: {
            getters: {
                serverHostUrl: ({constant}) => constant.serverHostUrl
            }
        },
        data () {
            return {
                login: {
                    show: 0,
                    body: {
                        nickname: '',
                        password: ''
                    },
                    message: ''
                }
            }
        },
        methods: {
            toggleLogin () {
                publicMethods.toggleDialog(this.login)
            },
            requestLogin () {
                var _this = this
                _this.$http.post(_this.serverHostUrl + '/login', _this.login.body)
                    .then((res) => {
                        var data = JSON.parse(res.data)
                        if (data.status) {
                            _this.login.show = 0
                            _this.login.message = ''
                        } else {
                            _this.login.message = data.message
                        }
                    }, () => {
                        _this.login.message = '网络错误'
                    })
            }
        }
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
    form.zone-form.form-login {
        .form-info {
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
    }
</style>
