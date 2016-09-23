<template>
    <h1>
        <a href="javascript:;" class="c-block">
            <img src="https://avatars2.githubusercontent.com/u/13533886?v=3&s=466" />
        </a>
    </h1>

    <h3>推荐文章</h3>
    <articles :articles="articles"></articles>
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
        margin: 170px auto 0;

        img {
            height: 160px;
            border-radius: 50%;
        }
    }
    h3 {
        font-size: 18px;
        line-height: 30px;
        color: #666;
        margin: 10px 0;
        padding: 0 50px;
    }
</style>
