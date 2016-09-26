<template>
    <form enctype="multipart/form-data" id="form_register" class="zone-form">
        <div class="form-upload">
            <img src="../assets/default_photo.jpg" />
            <input type="file" id="portrait" name="portrait" />
        </div>
        <div class="form-info">
            <h3>注册</h3>
            <input type="text" id="nickname" name="nickname" placeholder="昵称" />
            <input type="password" id="password" name="password" placeholder="密码" />
            <input type="password" placeholder="确认密码" />
            <input type="text" id="intro" name="intro" placeholder="一句话描述自己" />
            <div class="zone-btn"><a href="javascript:;">提交</a><a href="javascript:;">取消</a></div>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Register'
    }
</script>

<style lang="less" scoped>

</style>
