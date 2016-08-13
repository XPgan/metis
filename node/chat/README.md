# 多人聊天室 #
### express + mongodb + websocket ###

*****

参考资料

+ [Node.js开发指南](https://github.com/sunmengyuan/book/blob/master/Node.js%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.pdf)
+ [深入浅出Node.js](https://github.com/sunmengyuan/book/blob/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BANode.js.pdf)
+ [深入学习MongoDB](https://github.com/sunmengyuan/book/blob/master/%E6%B7%B1%E5%85%A5%E5%AD%A6%E4%B9%A0MongoDB.pdf)
+ [MongoDB for GIANT Ideas | MongoDB](https://www.mongodb.com/)
+ [mongoose文档](http://www.nodeclass.com/api/mongoose.html)
+ [Express - 基于Node.js平台的web应用开发框架](http://www.expressjs.com.cn/)
+ [Socket.IO](http://socket.io/)

*****

作者：呆恋小喵

欢迎参观：<http://www.miaomie.tech>

*****

_数据库：chat_

_数据表：users_

```javascript
var userSchema = new Schema({
    id: String,
    nickname: String,
    password: String,
    sex: String,
    tel: String,
    qq: String,
    intro: String
});
```

*****

### pages ###
+ __/__ (首页)

![](./materials/index.png)

+ __/edit/myinfo__ (个人设置页)

![](./materials/settings.png)

+ __/chatroom__ (聊天室)

![](./materials/chatroom.png)