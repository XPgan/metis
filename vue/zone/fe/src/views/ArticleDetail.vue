<template>
    <user-info></user-info>
    <section>
        <h4 class="article-title">这里是标题</h4>
        <div class="article-content">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</div>
        <div class="zone-btn"><a href="javascript:;">继续阅读</a></div>
    </section>
</template>

<script>
    import UserInfo from '../components/UserInfo.vue'

    export default {
        name: 'ArticleDetail',
        components: {
            UserInfo
        }
    }
</script>

<style lang="less" scoped>
    h4.article-title {
        font-size: 18px;
        line-height: 30px;
        color: #5c2b27;
    }
    .article-content {
        font-size: 16px;
        line-height: 22px;
        color: #666;
        white-space: pre-line;
        padding: 20px 0;
    }
</style>
