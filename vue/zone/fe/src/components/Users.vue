<template>
    <div class="m-users">
        <ul>
            <li v-for="item in users">
                <a href="javascript:;">
                    <img :src="item.portrait" class="c-vertical" />
                    <div>
                        <h4>{{ item.nickname }}</h4>
                        <p>{{ item.intro }}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Users',
        props: {
            users: Array
        }
    }
</script>

<style lang="less" scoped>
    .m-users {
        margin: 20px 0;

        ul { margin-top: -20px; }
        li {
            position: relative;
            padding: 20px 0 20px 100px;
            border-bottom: 1px solid #eceaea;
            min-height: 80px;

            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                position: absolute;
                left: 0;
            }
            h4 {
                font-size: 16px;
                line-height: 22px;
                color: #333;
                margin: 10px 0;
            }
            p {
                font-size: 14px;
                line-height: 20px;
                color: #666;
                margin: 10px 0;
            }
            &:last-child { border-bottom: none; }
        }
    }
</style>
