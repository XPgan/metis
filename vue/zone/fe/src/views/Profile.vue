<template>
    <user-info></user-info>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btns"><a href="javascript:;" class="zone-more">查看更多</a></div>
    </section>
    <div class="c-mask" v-show="editUser.show">
        <form enctype="multipart/form-data" id="form_edit_user" class="zone-form form-edit c-center">
            <div class="form-upload">
                <img src="../assets/img/default_upload.png" />
                <input
                    type="file"
                    v-model="editUser.body.portrait"
                    v-el:portrait />
                <span>更改头像</span>
            </div>
            <div class="form-info">
                <input
                    type="text" placeholder="用户名"
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
                    v-model="editUser.body.intro"
                    v-el:intro />
                <span>{{ editUser.message }}</span>
                <div class="zone-btns"><a href="javascript:;">提交</a><a href="javascript:;" @click="toggleEditUser">取消</a></div>
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
        methods: {
            toggleEditUser () {
                publicMethods.toggleDialog(this.editUser)
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
