## [vue-router](http://router.vuejs.org/zh-cn/index.html) ##

### #路由对象 ###
+ $route.query

    | 模式 | 路径 | 解析结果 |
    | ------------------------------ | --------------------------------- | ------------------------------ |
    | /user/diary?user_id=&diary_id= | /user/diary?user_id=1&diary_id=10 | {'user_id': 1, 'diary_id': 10} |

+ $route.params
    + 动态片断
    + 全匹配片段
