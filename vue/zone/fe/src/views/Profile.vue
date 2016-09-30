<template>
    <user-info :user-info="userInfo"></user-info>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btns"><a href="javascript:;" class="zone-more">查看更多</a></div>
    </section>
    <div class="c-mask" v-show="editUser.show">
        <form enctype="multipart/form-data" id="form_edit_user" class="zone-form form-edit c-center">
            <div class="form-upload">
                <img
                    :src="serverHostUrl + userInfo.portrait"
                    v-el:upload />
                <input
                    type="file"
                    @change="fileAnalysis($event)"
                    v-model="editUser.body.portrait"
                    v-el:portrait />
                <span>更改头像</span>
            </div>
            <div class="form-info">
                <input
                    type="text" placeholder="用户名"
                    :value="userInfo.nickname"
                    v-model="editUser.body.nickname"
                    v-el:nickname />
                <input
                    type="password" placeholder="原密码"
                    v-model="editUser.body.oldPassword"
                    v-el:old-password />
                <input
                    type="password" placeholder="新密码"
                    v-model="editUser.body.password"
                    v-el:password />
                <input
                    type="password" placeholder="确认密码"
                    v-el:cfm-password />
                <input
                    type="text" placeholder="一句话描述自己"
                    :value="userInfo.intro"
                    v-model="editUser.body.intro"
                    v-el:intro />
                <span>{{ editUser.message }}</span>
                <div class="zone-btns">
                    <a href="javascript:;" @click="requestEditUser">提交</a>
                    <a href="javascript:;" @click="toggleEditUser">取消</a>
                </div>
            </div>
        </form>
    </div>
    <div class="zone-ctrls">
        <a href="javascript:;" class="ctrl-publish"><span></span></a>
        <a href="javascript:;" class="ctrl-edituser" @click="toggleEditUser"><span></span></a>
    </div>
</template>

<script>
    import publicMethods from '../assets/script/public'
    import Articles from '../components/Articles'
    import UserInfo from '../components/UserInfo'

    export default {
        name: 'Profile',
        components: {
            Articles,
            UserInfo
        },
        vuex: {
            getters: {
                serverHostUrl: ({constant}) => constant.serverHostUrl
            }
        },
        data () {
            return {
                userInfo: {},
                articles: [],
                editUser: {
                    show: 0,
                    formData: new window.FormData(),
                    body: {
                        nickname: '',
                        oldPassword: '',
                        password: '',
                        intro: '',
                        portrait: ''
                    },
                    message: ''
                }
            }
        },
        created () {
            var _this = this
            var hash = window.location.hash.slice(1)
            _this.$http.get(_this.serverHostUrl + hash)
                .then((res) => {
                    var data = JSON.parse(res.data)
                    data.status && (_this.userInfo = data.data)
                })
        },
        methods: {
            fileAnalysis (e) {
                var _this = this
                var fileReader = new window.FileReader()
                var file = e.target.files[0]

                _this.editUser.formData.append('portrait', file)

                // 上传图片预览
                fileReader.onload = function (e) {
                    var fileData = e.target.result
                    _this.$els.upload.src = fileData
                }
                fileReader.readAsDataURL(file)
            },
            toggleEditUser () {
                publicMethods.toggleDialog(this.editUser)
            },
            requestEditUser () {
                var _this = this
                var _editUser = _this.editUser
                var body = _editUser.body
                var formData = _editUser.formData

                var $els = _this.$els
                var nickname = $els.nickname.value
                var oldPassword = $els.oldPassword.value
                var password = $els.password.value
                var cfmPassword = $els.cfmPassword.value
                var intro = $els.intro.value
                var portrait = $els.portrait.value

                var checkPassword = function () {
                    if (password || cfmPassword || oldPassword) {
                        if (password && (password === cfmPassword)) {
                            body.oldPassword = oldPassword
                            body.password = password
                            upload()
                        } else {
                            _editUser.message = '密码或确认密码有误'
                        }
                    } else {
                        upload()
                    }
                }
                var upload = function () {
                    if (portrait) {
                        _this.$http.post(_this.serverHostUrl + '/upload/portrait', formData)
                            .then((res) => {
                                var data = JSON.parse(res.data)
                                if (data.status) {
                                    body.portrait = data.url
                                    editUser()
                                } else {
                                    _editUser.message = data.message
                                }
                            }, () => {
                                _editUser.message = '网络错误'
                            })
                    } else {
                        editUser()
                    }
                }
                var editUser = function () {
                    var id = _this.userInfo.id
                    for (var key in body) {
                        body[key] || delete body[key]
                    }

                    _this.$http.post(_this.serverHostUrl + '/edit/user/' + id, body)
                        .then((res) => {
                            var data = JSON.parse(res.data)
                            if (data.status) {
                                _editUser.message = ''
                                window.location.reload()
                            } else {
                                _editUser.message = data.message
                            }
                        }, () => {
                            _editUser.message = '网络错误'
                        })
                }

                var noEmpty = nickname && intro
                if (noEmpty) {
                    checkPassword()
                } else {
                    _editUser.message = '用户名及个人简介不可修改为空'
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    a.ctrl-publish {
        left: 20px;
        bottom: 100px;

        span { background-position: 50% 0; }
    }
    a.ctrl-edituser{
        left: 20px;
        bottom: 30px;

        span { background-position: 50% -24px; }
    }
</style>
