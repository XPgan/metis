# 简易微博系统 #
### express + mongodb + fs ###

__用户注册本站后即可发布个人日记，并可粉丝他人、收藏他人日记帖__

后续功能：评论、关注、推荐

_数据库：expo_

_数据表：users & diaries_

*****

作者：呆恋小喵

欢迎参观：<http://www.miaomie.tech>

*****

### 结构 ###
+ 首页 __'/'__
	+ 最新注册用户列表
	+ 精选日记列表
	+ 作者信息
	+ 登录 _[user_name]_ _[password]_
+ 注册页 __'/register'__
	+ 注册 _[user_name]_ _[password]_ _[sex]_ _[tel]_ _[qq]_ _[intro]_
+ 用户主页 __'/profile/:id'__
	+ 用户信息
	+ 用户日记列表
+ 发布日记页 __'/diary/publish'__
	+ 发布日记 _[title]_ _[content]_
+ 日记详情页 __'/diary/:id'__
	+ 作者信息
	+ 日记详情

### 模块 ###
+ 'modules/log.js'	
	+ 登录 __log.login()__
	+ 注册 __log.register()__
	+ 注销 __log.logout()__
	+ 退出登录 __log.exit()__
+ 'modules/find.js'
	+ 查询当前记录 __find.info()__
	+ 查询所有记录 __find.all()__
+ 'modules/diary.js'
	+ 发布日记 __diary.publish()__
	+ 编辑日记 __diary.edit()__
	+ 移除日记 __diary.remove()__
	+ 点赞日记 __diary.favour()__
+ 'modules/user.js'
	+ 编辑用户信息 __user.edit()__
	+ 关注用户 __user.attention()__