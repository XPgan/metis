## [vue-router](http://router.vuejs.org/zh-cn/index.html) ##

### #路由对象 ###
+ __$route.query__

    | 模式 | 路径 | 解析结果 |
    | ------------------------------ | --------------------------------- | ------------------------------ |
    | /user/diary?user_id=&diary_id= | /user/diary?user_id=1&diary_id=10 | {user_id: '1', diary_id: '10'} |

+ __$route.params__
    + 动态片断
    + 全匹配片段

    | 模式 | 路径 | 解析结果 |
    | ------------------------------ | ------------------- | ------------------------------ |
    | /user/:user_id/diary/:diary_id | /user/1/diary/10    | {user_id: '1', diary_id: '10'} |
    | /diary/*key/publish            | /diary/1/10/publish | {key: '1/10'}                  |
