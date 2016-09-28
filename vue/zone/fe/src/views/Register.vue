<template>
    <form enctype="multipart/form-data" id="form_register" class="zone-form">
        <div class="form-upload">
            <img :src="portrait" />
            <input type="file" id="portrait" name="portrait" @change="uploadPortrait($event)" />
            <span>上传头像</span>
        </div>
        <div class="form-info">
            <h3>注册</h3>
            <input type="text" id="nickname" name="nickname" placeholder="昵称" v-model="registerForm.nickname" />
            <input type="password" id="password" name="password" placeholder="密码" v-model="registerForm.password" />
            <input type="password" placeholder="确认密码" />
            <input type="text" id="intro" name="intro" placeholder="一句话描述自己" v-model="registerForm.intro" />
            <span>这里是提示信息</span>
            <div class="zone-btns"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
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
            },
            requestRegister () {

            }
        }
    }
</script>

<style lang="less" scoped>

</style>
