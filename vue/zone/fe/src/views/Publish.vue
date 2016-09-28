<template>
    <form enctype="multipart/form-data" id="form_publish" class="zone-form">
        <div class="form-upload">
            <img src="../assets/default_upload.png" />
            <input type="file" id="cover" name="cover" />
            <span>上传封面</span>
        </div>
        <div class="form-info">
            <h3>发表</h3>
            <input type="text" id="title" name="title" placeholder="请输入标题" />
            <textarea id="content" name="content" placeholder="请输入正文"></textarea>
            <span>这里是提示信息</span>
            <div class="zone-btns"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Publish'
    }
</script>

<style lang="less" scoped>

</style>
