<template>
    <form enctype="multipart/form-data" id="form_register">
        <div class="register-portrait">
            <img src="../assets/default_portrait.jpg" />
            <input type="file" id="portrait" name="portrait" />
        </div>
        <div class="register-info">
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
    .register-info {
        width: 500px;
        padding: 10px 30px;
        margin: 30px auto;
        border-radius: 10px;
        background-color: #f7f7f7;

        h3 {
            font-size: 20px;
            line-height: 36px;
            text-align: center;
            color: #5c2b27;
            margin-top: 10px;
        }
        input {
            width: 100%;
            font-size: 16px;
            line-height: 32px;
            color: #666;
            border-bottom: 1px solid #e8e8e8;
            background-color: transparent;
            margin: 10px 0;

            &::-webkit-input-placeholder {
                color: #999;
            }
        }
    }
    @media screen and (max-width: 600px) {
        .register-info { width: 250px; }
    }
</style>
