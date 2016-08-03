# 简易微博系统 #
### express + mongodb + fs ###

__用户注册本站后即可发布个人日记，并可粉丝他人、收藏他人日记__

后续功能：评论日记、关注用户

*****

_数据库：expo_

_数据表：users、diaries_

```javascript
var userSchema = new Schema({
    id: String,
    user_name: String,
    password: String,
    sex: String,
    tel: String,
    qq: String,
    intro: String,
    portrait: String,
    diaries: [],
    followers: [],
    concerns: [],
    favours: []
});

var diarySchema = new Schema({
    id: String,
    author: String,
    title: String,
    content: String,
    voters: []
}); 
```

*****

作者：呆恋小喵

欢迎参观：<http://www.miaomie.tech>

*****

### pages ###
+ __/__ (首页)
	+ 最新注册用户列表
	+ 精选日记列表
	+ 登录
+ __/register__ (注册页)
	+ 注册
+ __/profile/:id__ (用户主页)
	+ 用户信息
	+ 用户日记列表
+ __/diary/publish__ (发布日记页)
	+ 发布日记
+ __/diary/:id__ (日记详情页)
	+ 作者信息
	+ 日记详情

### modules ###
+ `require('log')`
	+ 登录 __log.login()__
        ```javascript
        $.ajax({
            url: '/login',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {},
            error: function () {}
        });
        ```
	+ 注册 __log.register()__
        ```javascript
        $.ajax({
            url: '/register',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {},
            error: function () {}
        });
        ```
	+ 注销 __log.logout()__
	    ```javascript
	    $.ajax({
            url: '/logout',
            type: 'POST',
            success: function (data) {},
            error: function () {}
        });
        ```
	+ 退出登录 __log.exit()__	
	    ```javascript
	    $.ajax({
            url: '/exit',
            type: 'POST',
            success: function (data) {},
            error: function () {}
        });
	    ```
+ `require('find')`
	+ 查询当前记录 __find.info()__
	+ 查询所有记录 __find.all()__	
+ `require('diary')`
	+ 发布日记 __diary.publish()__
	    ```javascript
	    $.ajax({
            url: '/diary/publish',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {},
            error: function () {}
        });
	    ```
	+ 编辑日记 __diary.edit()__
	+ 移除日记 __diary.remove()__
	+ 点赞日记 __diary.favour()__	
	    ```javascript
	    $.ajax({
            url: '/diary/favour/verify/:id',
            type: 'POST',
            success: function (data) {},
            error: function () {}
        });
	    ```
	    ```javascript
	    $.ajax({
            url: '/diary/favour/cancel/:id',
            type: 'POST',
            success: function (data) {},
            error: function () {}
        });
	    ```
+ `require('user')`
	+ 编辑用户信息 __user.edit()__
	    ```javascript
	    $.ajax({
            url: '/user/edit/info',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {},
            error: function () {}
        });
	    ```
	    ```javascript
	    $.ajax({
            url: '/user/edit/portrait',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {},
            error: function () {}
        });
	    ```
	+ 关注用户 __user.attention()__