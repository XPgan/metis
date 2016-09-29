<template>
    <form enctype="multipart/form-data" id="form_register" class="zone-form">
        <div class="form-upload">
            <img :src="portrait" />
            <input
                type="file"
                id="portrait"
                name="portrait"
                @change="uploadPortrait($event)"
                v-model="register.body.portrait"
                v-el:portrait />
            <span>上传头像</span>
        </div>
        <div class="form-info">
            <h3>注册</h3>
            <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="昵称"
                v-model="register.body.nickname"
                v-el:nickname />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="密码"
                v-model="register.body.password"
                v-el:password />
            <input
                type="password"
                placeholder="确认密码"
                v-el:cfm-password />
            <input
                type="text"
                id="intro"
                name="intro"
                placeholder="一句话描述自己"
                v-model="register.body.intro"
                v-el:intro />
            <span>{{ register.message }}</span>
            <div class="zone-btns"><a href="javascript:;" @click="requestRegister">提交</a><a href="javascript:;">取消</a></div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Register',
        vuex: {
            getters: {
                serverHostUrl: ({constant}) => constant.serverHostUrl
            }
        },
        data () {
            return {
                portrait: '/static/default_upload.png',
                register: {
                    formData: new window.FormData(),
                    body: {
                        nickname: '',
                        password: '',
                        intro: '',
                        portrait: ''
                    },
                    message: ''
                }
            }
        },
        methods: {
            uploadPortrait (e) {
                var _this = this
                var fileReader = new window.FileReader()
                var file = e.target.files[0]

                fileReader.onload = function (e) {
                    var fileData = e.target.result
                    _this.portrait = fileData
                }
                fileReader.readAsDataURL(file)

                _this.register.formData.append('portrait', file)
            },
            requestRegister () {
                var $els = this.$els
                var _register = this.register
                var body = _register.body
                var formData = _register.formData

                var nickname = $els.nickname.value
                var password = $els.password.value
                var cfmPassword = $els.cfmPassword.value
                var intro = $els.intro.value
                var portrait = $els.portrait.value

                var judge = nickname && password && cfmPassword && intro && portrait

                if (judge) {
                    if (password === cfmPassword) {
                        this.$http.post(this.serverHostUrl + '/upload/portrait', formData)
                            .then((res) => {
                                var data = JSON.parse(res.data)
                                if (data.status) {
                                    body.portrait = data.url

                                    this.$http.post(this.serverHostUrl + '/register', body)
                                        .then((res) => {
                                            var data = JSON.parse(res.data)
                                            if (data.status) {
                                                _register.message = ''

                                                window.location.href = '/'
                                            } else {
                                                _register.message = data.message
                                            }
                                        }, () => {
                                            _register.message = '网络错误'
                                        })
                                } else {
                                    _register.message = data.message
                                }
                            }, () => {
                                _register.message = '网络错误'
                            })
                    } else {
                        _register.message = '密码或确认密码有误'
                    }
                } else {
                    _register.message = '注册信息不完整'
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
