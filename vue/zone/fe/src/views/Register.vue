<template>
    <form enctype="multipart/form-data" id="form_register" class="zone-form">
        <div class="form-upload">
            <img
                src="../assets/img/default_upload.png"
                v-el:upload />
            <input
                type="file"
                @change="fileAnalysis($event)"
                v-model="register.body.portrait"
                v-el:portrait />
            <span>上传头像</span>
        </div>
        <div class="form-info">
            <h3>注册</h3>
            <input
                type="text" placeholder="用户名"
                v-model="register.body.nickname"
                v-el:nickname />
            <input
                type="password" placeholder="密码"
                v-model="register.body.password"
                v-el:password />
            <input
                type="password" placeholder="确认密码"
                v-el:cfm-password />
            <input
                type="text" placeholder="个人简介"
                v-model="register.body.intro"
                v-el:intro />
            <span>{{ register.message }}</span>
            <div class="zone-btns">
                <a href="javascript:;" @click="requestRegister">提交</a>
                <a href="javascript:;">取消</a>
            </div>
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
            fileAnalysis (e) {
                var _this = this
                var fileReader = new window.FileReader()
                var file = e.target.files[0]

                _this.register.formData.append('portrait', file)

                // 上传图片预览
                fileReader.onload = function (e) {
                    var fileData = e.target.result
                    _this.$els.upload.src = fileData
                }
                fileReader.readAsDataURL(file)
            },
            requestRegister () {
                var _this = this
                var _register = _this.register
                var body = _register.body
                var formData = _register.formData

                var $els = _this.$els
                var nickname = $els.nickname.value
                var password = $els.password.value
                var cfmPassword = $els.cfmPassword.value
                var intro = $els.intro.value
                var portrait = $els.portrait.value

                var register = function () {
                    _this.$http.post(_this.serverHostUrl + '/register', body)
                        .then((res) => {
                            var data = JSON.parse(res.data)
                            if (data.status) {
                                _register.message = ''

                                window.localStorage.setItem('user', data.id)
                                window.location.href = '/'
                            } else {
                                _register.message = data.message
                            }
                        }, () => {
                            _register.message = '网络错误'
                        })
                }
                var upload = function () {
                    _this.$http.post(_this.serverHostUrl + '/upload/portrait', formData)
                        .then((res) => {
                            var data = JSON.parse(res.data)
                            if (data.status) {
                                body.portrait = data.url
                                register()
                            } else {
                                _register.message = data.message
                            }
                        }, () => {
                            _register.message = '网络错误'
                        })
                }

                var hasEmpty = nickname && password && cfmPassword && intro && portrait
                if (hasEmpty) {
                    if (password === cfmPassword) {
                        upload()
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
