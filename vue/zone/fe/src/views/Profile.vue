<template>
    <user-info></user-info>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btn"><a href="javascript:;" class="zone-more">查看更多</a></div>
    </section>
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

</style>
