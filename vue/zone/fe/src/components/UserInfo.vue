<template>
    <div class="m-userinfo">
        <img src="https://avatars2.githubusercontent.com/u/13533886?v=3&s=466" />
        <div>
            呆恋小喵
            <br />
            这里是个人简介这里是个人简介这里是个人简介这里是
        </div>
    </div>
</template>

<script>
    export default {
        name: 'UserInfo'
    }
</script>

<style lang="less" scoped>
    .m-userinfo {
        text-align: center;
        max-width: 200px;
        margin: -80px auto 0;

        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin: 0 auto;
        }
        div {
            font-size: 14px;
            line-height: 24px;
            color: #666;
            margin-top: 15px;
        }
    }
</style>
