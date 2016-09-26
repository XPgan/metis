<template>
    <h1>
        <a href="javascript:;" class="c-block">
            <img src="../assets/logo.png" />
        </a>
    </h1>
    <section>
        <h3 class="zone-title">推荐用户</h3>
        <users :users="users"></users>
    </section>
    <section class="section-articles">
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btn">
            <a href="javascript:;" class="zone-more">more</a>
        </div>
    </section>
</template>

<script>
    import Articles from '../components/Articles.vue'
    import Users from '../components/Users.vue'

    export default {
        name: 'Homepage',
        components: {
            Articles,
            Users
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
                ],
                users: [
                    {
                        nickname: '用户一',
                        portrait: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466',
                        intro: '个人简介'
                    },
                    {
                        nickname: '用户二',
                        portrait: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466',
                        intro: '个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介'
                    },
                    {
                        nickname: '用户三',
                        portrait: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466',
                        intro: '个人简介'
                    },
                    {
                        nickname: '用户二',
                        portrait: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466',
                        intro: '个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介'
                    },
                    {
                        nickname: '用户三',
                        portrait: 'https://avatars2.githubusercontent.com/u/13533886?v=3&s=466',
                        intro: '个人简介'
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    h1 {
        width: 168px;
        margin: -80px auto 0;
    }
    .section-articles { margin-top: 50px; }
</style>
