<template>
    <form enctype="multipart/form-data" id="form_portrait">
        <!--<img src="" />-->
        <input type="file" id="portrait" name="portrait" />
    </form>
</template>

<script>
    export default {
        name: 'Register'
    }
</script>

<style lang="less" scoped>
    #form_portrait {
        position: relative;
        width: 160px;
        height: 160px;
        margin: -80px auto 0;
        border-radius: 50%;
        overflow: hidden;
        background: url("../assets/default_portrait.jpg") no-repeat 50% 50%;
        background-size: 160px auto;

        input, img {
            width: 160px;
            height: 160px;
            position: absolute;
            top: 0;
            left: 0;
        }
        input {
            opacity: 0;
        }
    }
</style>
