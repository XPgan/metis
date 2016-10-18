<template>
    <h1>
        <a href="https://github.com/sunmengyuan" class="c-block">
            <img src="../assets/img/logo.png" />
        </a>
    </h1>
    <section>
        <h3 class="zone-title">所有用户</h3>
        <users :users="users"></users>
        <div class="zone-btns">
            <a href="javascript:;">查看更多</a>
        </div>
    </section>
    <section>
        <h3 class="zone-title">所有文章</h3>
        <articles :articles="articles"></articles>
        <div class="zone-btns">
            <a href="javascript:;">查看更多</a>
        </div>
    </section>
</template>

<script>
    import publicMethods from '../assets/script/public'
    import Articles from '../components/Articles'
    import Users from '../components/Users'

    export default {
        name: 'Homepage',
        components: {
            Articles,
            Users
        },
        vuex: {
            getters: {
                serverHostUrl: ({constant}) => constant.serverHostUrl
            }
        },
        data () {
            return {
                articles: [],
                users: []
            }
        },
        created () {
            this.fetchData()
        },
        route: {
            data () {
                this.fetchData()
            }
        },
        methods: {
            fetchData () {
                var _this = this
                publicMethods.getRequest(_this, _this.serverHostUrl + '/users', function (data) {
                    _this.users = data.data
                })
                publicMethods.getRequest(_this, _this.serverHostUrl + '/articles', function (data) {
                    _this.articles = data.data
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    h1 {
        width: 168px;
        margin: -80px auto 0;
    }
</style>
