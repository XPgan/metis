## [vue-router](http://router.vuejs.org/zh-cn/index.html) ##

### #路由对象 ###
+ __$route.query__

    | 模式 | 路径 | 解析结果 |
    | -------------------------------- | ----------------------------------- | ------------------------------ |
    | '/user/diary?user_id=&diary_id=' | '/user/diary?user_id=1&diary_id=10' | {user_id: '1', diary_id: '10'} |

+ __$route.params__

    | 模式 | 路径 | 解析结果 |
    | -------------------------------- | --------------------- | ------------------------------ |
    | '/user/:user_id/diary/:diary_id' | '/user/1/diary/10'    | {user_id: '1', diary_id: '10'} |
    | '/diary/*key/publish'            | '/diary/1/10/publish' | {key: '1/10'}                  |

*****

### #具名路径 ###

```javascript
router.map({
    '/user/:user_id': {
        name: 'user',
        component: User
    }
});
```
```javascript
router.go({name: 'user', params: {user_id: '1'}});
```
```html
<a v-link="{name: 'user', params: {user_id: '1'}}"></a>
```

*****

### #嵌套路由 ###

```javascript
router.map({
    '/post': {
        component: Post,
        subRoutes: {
            '/': {
                component: Default
            },
            '/topic': {
                component: Topic
            },
            '/diary': {
                component: Diary
            }
        }
    }
});
```