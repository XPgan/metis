<template>
    <form enctype="multipart/form-data" id="form_register" class="zone-form">
        <div class="form-upload">
            <img :src="portrait" />
            <input type="file" id="portrait" name="portrait" @change="uploadPortrait($event)" />
            <span>上传头像</span>
        </div>
        <div class="form-info">
            <h3>注册</h3>
            <input type="text" id="nickname" name="nickname" placeholder="昵称" v-model="registerForm.nickname" v-el:nickname />
            <input type="password" id="password" name="password" placeholder="密码" v-model="registerForm.password" v-el:password />
            <input type="password" placeholder="确认密码" v-el:confirm-password />
            <input type="text" id="intro" name="intro" placeholder="一句话描述自己" v-model="registerForm.intro" v-el:intro />
            <span>{{ registerMessage }}</span>
            <div class="zone-btns"><a href="javascript:;" @click="requestRegister">提交</a><a href="javascript:;">取消</a></div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                portrait: '/static/default_upload.png',
                registerForm: {
                    nickname: '',
                    password: '',
                    intro: '',
                    portrait: ''
                },
                registerMessage: ''
            }
        },
        methods: {
            uploadPortrait (e) {
                var _this = this
                var fileReader = new window.FileReader()
                var file = e.target.files[0]

                // 图片预览
                fileReader.onload = function (e) {
                    var fileData = e.target.result
                    _this.portrait = fileData
                }
                fileReader.readAsDataURL(file)

                _this.registerForm.portrait = file
            },
            requestRegister () {
                var nickname = this.$els.nickname.value
                var password = this.$els.password.value
                var confirmPassword = this.$els.confirmPassword.value
                var intro = this.$els.intro.value
                var portrait = this.registerForm.portrait

                if (nickname && password && confirmPassword && intro && portrait) {
                    if (password === confirmPassword) {
                        this.registerMessage = ''
                        console.log('发送请求')
                    } else {
                        this.registerMessage = '密码或确认密码有误'
                    }
                } else {
                    this.registerMessage = '信息填写不完整'
                }
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
