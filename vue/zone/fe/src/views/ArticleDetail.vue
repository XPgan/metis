<template>
    <user-info></user-info>
    <section>
        <h4 class="article-title">这里是标题<a href="javascript:;"></a></h4>
        <div class="article-content">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</div>
        <div class="zone-btn"><a href="javascript:;">继续阅读</a></div>
    </section>
    <div class="c-mask">
        <form enctype="multipart/form-data" id="form_edit_article" class="zone-form form-edit c-center">
            <div class="form-upload">
                <img src="../assets/default_upload.png" />
                <input type="file" id="cover" name="cover" />
                <span>修改封面</span>
            </div>
            <div class="form-info">
                <input type="text" id="title" name="title" placeholder="标题" />
                <textarea id="content" name="content" placeholder="正文"></textarea>
                <span>这里是提示信息</span>
                <div class="zone-btns"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
            </div>
        </form>
    </div>
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

        a {
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 30px;
            background: url("../assets/ico_edit.png") no-repeat 50% 2px;
            background-size: 20px auto;
            margin-left: 10px;
        }
    }
    .article-content {
        font-size: 16px;
        line-height: 22px;
        color: #666;
        white-space: pre-line;
        padding: 20px 0;
    }
</style>
