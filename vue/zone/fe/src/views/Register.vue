<template>
    <form enctype="multipart/form-data" id="form_register">
        <div class="register-portrait">
            <img src="../assets/default_portrait.jpg" />
            <input type="file" id="portrait" name="portrait" />
        </div>
    </form>
</template>

<script>
    export default {
        name: 'Register'
    }
</script>

<style lang="less" scoped>
    .register-portrait {
        position: relative;
        width: 160px;
        height: 160px;
        margin: -80px auto 0;
        border-radius: 50%;
        overflow: hidden;

        img, input {
            width: 160px;
            height: 160px;
            position: absolute;
            left: 0;
            top: 0;
        }
        input { opacity: 0; }
    }
</style>
