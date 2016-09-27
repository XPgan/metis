<template>
    <user-info></user-info>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btn"><a href="javascript:;" class="zone-more">查看更多</a></div>
    </section>
    <div class="c-mask">
        <form enctype="multipart/form-data" id="form_edituser" class="zone-form c-center">
            <div class="form-upload">
                <img src="../assets/default_photo.png" />
                <input type="file" id="portrait" name="portrait" />
                <span>更改头像</span>
            </div>
            <div class="form-info">
                <input type="text" id="nickname" name="nickname" placeholder="昵称" />
                <input type="password" id="old_password" name="old_password" placeholder="原密码" />
                <input type="password" id="password" name="password" placeholder="新密码" />
                <input type="password" placeholder="确认密码" />
                <input type="text" id="intro" name="intro" placeholder="一句话描述自己" />
                <span>这里是提示信息</span>
                <div class="zone-btn"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
            </div>
        </form>
    </div>
</template>

<script>
    import Articles from '../components/Articles.vue'
    import UserInfo from '../components/UserInfo.vue'

    export default {
        name: 'Profile',
        components: {
            Articles,
            UserInfo
        },

        data () {
            return {
                articles: [
                    {
                        title: '文章一',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章二',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章一',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章二',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章一',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章二',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章一',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章二',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    },
                    {
                        title: '文章三',
                        cover: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    form.zone-form {
        position: fixed;

        .form-upload {
            width: 100px;
            margin: 50px auto -130px;

            img, input {
                width: 100px;
                height: 100px;
            }
        }
        .form-info {
            padding-top: 80px;
            margin: 50px auto;
        }
    }
</style>
