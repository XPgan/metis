<template>
    <h1>
        <a href="javascript:;" class="c-block">
            <img src="../assets/logo.jpg" />
        </a>
    </h1>
    <section>
        <h3 class="zone-title">推荐文章</h3>
        <articles :articles="articles"></articles>
    </section>
</template>

<script>
    import Articles from '../components/Articles.vue'

    export default {
        name: 'Homepage',
        components: {
            Articles
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
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    h1 {
        width: 160px;
        margin: -80px auto 0;

        img {
            height: 160px;
            border-radius: 50%;
        }
    }
</style>
