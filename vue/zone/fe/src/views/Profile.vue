<template>
    <user-info></user-info>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btns"><a href="javascript:;" class="zone-more">查看更多</a></div>
    </section>
    <div class="c-mask">
        <form enctype="multipart/form-data" id="form_edit_user" class="zone-form form-edit c-center">
            <div class="form-upload">
                <img src="../assets/default_upload.png" />
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
                <div class="zone-btns"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
            </div>
        </form>
    </div>
    <div class="zone-ctrls">
        <a href="javascript:;" class="ctrl-publish"><span></span></a>
        <a href="javascript:;" class="ctrl-edituser"><span></span></a>
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
