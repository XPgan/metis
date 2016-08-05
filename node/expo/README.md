# 简易微博系统 #
### express + mongodb + fs ###

__用户注册本站后即可发布个人日记，并可粉丝他人、收藏他人日记__

后续功能：评论日记、关注用户

*****

作者：呆恋小喵

欢迎参观：<http://www.miaomie.tech>

*****

_数据库：expo_

_数据表：users、diaries_

```javascript
var userSchema = new Schema({
    id: String,
    username: String,
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

### pages ###
+ __/__ (首页) [效果图](./materials/index.png)
	+ 最新注册用户列表
	+ 精选日记列表
	+ 登录
+ __/register__ (注册页) [效果图](./materials/register.png)
	+ 注册
+ __/profile/:id__ (用户主页) [效果图](./materials/profile.png)
	+ 用户信息
	+ 用户日记列表
+ __/diary/publish__ (发布日记页) [效果图](./materials/publish.png)
	+ 发布日记
+ __/diary/:id__ (日记详情页)
	+ 作者信息
	+ 日记详情

### modules ###
+ `require('log')`
	+ 登录 __log.login()__
	
	    ```html
	    <form id="form_login">
            <input type="text" name="username" placeholder="用户名" />
            <input type="password" name="password" placeholder="密码" />
        </form>
	    ```
	    
        ```javascript
        var $form = $('#form_login');
        $.ajax({
            url: '/login',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {
                var status = JSON.parse(data).status;
                var message = JSON.parse(data).message;
            },
            error: function () {}
        });
        ```
        
	+ 注册 __log.register()__
	
	    ```html
	    <form id="form_register">
            <input type="text" name="username" placeholder="用户名" />
            <input type="password" name="password" placeholder="密码" />
            <input type="text" name="sex" placeholder="性别" />
            <input type="text" name="tel" placeholder="电话" />
            <input type="text" name="qq" placeholder="QQ" />
            <textarea name="intro" placeholder="描述一下自己"></textarea>
        </form>
	    ```
	    
        ```javascript
        var $form = $('#form_register');
        $.ajax({
            url: '/register',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {
                var status = JSON.parse(data).status;
                var message = JSON.parse(data).message;
                var user = JSON.parse(data).user;
            },
            error: function () {}
        });
        ```
        
	+ 注销 __log.logout()__
	
	    ```javascript
	    $.ajax({
            url: '/logout',
            type: 'POST',
            success: function (data) {
                var status = JSON.parse(data).status;
                var message = JSON.parse(data).message;
            },
            error: function () {}
        });
        ```
        
	+ 退出登录 __log.exit()__	
	
	    ```javascript
	    $.ajax({
            url: '/exit',
            type: 'POST',
            success: function (data) {
                var status = JSON.parse(data).status;
                var message = JSON.parse(data).message;
            },
            error: function () {}
        });
	    ```
	    
+ `require('find')`
	+ 查询当前记录 __find.info()__
	+ 查询所有记录 __find.all()__	
+ `require('diary')`
	+ 发布日记 __diary.publish()__
	
	    ```html
	    <form id="form_publish">
            <input type="text" name="title" placeholder="简明扼要哒标题" />
            <textarea name="content" placeholder="美源于生活点滴"></textarea>
        </form>
	    ```
	    
	    ```javascript
	    var $form = $('#form_publish');
	    $.ajax({
            url: '/diary/publish',
            type: 'POST',
            data: $form.serialize(),
            success: function (data) {
                var status = JSON.parse(data).status;
                var message = JSON.parse(data).message;
            },
            error: function () {}
        });
	    ```
	    
	+ 编辑日记 __diary.edit()__
	+ 移除日记 __diary.remove()__
	+ 点赞日记 __diary.favour__	
	    + __diary.favour.verify()__
	
            ```javascript
            $.ajax({
                url: '/diary/favour/verify/:id',
                type: 'POST',
                success: function (data) {
                    var status = JSON.parse(data).status;
                    var message = JSON.parse(data).message;
                },
                error: function () {}
            });
            ```
	    
	    + __diary.favour.cancel()__
	    
            ```javascript
            $.ajax({
                url: '/diary/favour/cancel/:id',
                type: 'POST',
                success: function (data) {
                    var status = JSON.parse(data).status;
                    var message = JSON.parse(data).message;
                },
                error: function () {}
            });
            ```
	    
+ `require('user')`
	+ 编辑用户信息 __user.edit__
	    + __user.edit.info()__
	    
            ```html
            <form id="form_userinfo">
                <input type="text" name="intro" placeholder="还咩有自我评价哦" value="<%= userinfo.intro %>" />
            </form>
            ```
    
            ```javascript
            var $form = $('#form_userinfo');
            $.ajax({
                url: '/user/edit/info',
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    var status = JSON.parse(data).status;
                    var message = JSON.parse(data).message;
                },
                error: function () {}
            });
            ```
	    
	    + __user.edit.portrait()__
	    
            ```html
            <form enctype="multipart/form-data" id="form_portrait">
                <input type="file" name="portrait" />
            </form>
            ```
            
            ```javascript
            var $form = $('#form_portrait');
            var formData = new FormData($form[0]);
            $.ajax({
                url: '/user/edit/portrait',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    var status = JSON.parse(data).status;
                    var message = JSON.parse(data).message;
                    var url = JSON.parse(data).url;
                },
                error: function () {}
            });
            ```
	    
	+ 关注用户 __user.attention()__