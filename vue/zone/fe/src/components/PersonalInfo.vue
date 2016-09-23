<template>
    <div class="m-personal-info c-horizontal">
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
        name: 'PersonalInfo'
    }
</script>

<style lang="less" scoped>
    .m-personal-info {
        position: fixed;
        top: 170px;
        max-width: 200px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin: 0 auto;
        }
        & > div {
            font-size: 14px;
            line-height: 24px;
            color: #666;
            margin-top: 15px;
        }
    }
</style>
