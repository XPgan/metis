/**
 * Created by sunmy on 16/4/12.
 */

/**
 * 单线程
 * 非阻塞 I/O (异步 I/O)
 * 事件驱动
 *
 * 全局对象(全局变量宿主) global
 * 全局变量(全局对象属性)
 *     process 描述进程状态
 *     console
 *
 * # 建立工程
 * express -e filename
 **/






/* 核心模块 */

/** util **/

/* util.inherits(constructor, superConstructor) */
var util = require('util');
// 基础对象
function Parent (pro1, pro2) {
    this.pro1 = pro1;
    this.pro2 = pro2;
    this.fun1 = function () {
        console.log('hello world');
    }
}
Parent.prototype.fun2 = function () {
    console.log('HELLO WORLD');
};
// 继承对象
function Children (pro) {
    this.pro = pro;
}
// Children 仅继承了 Parent 的原型方法及属性
util.inherits(Children, Parent);


/* util.inspect(object, [showHidden], [depth], [colors]) */



/** events **/

/* events.EventEmitter() */
var events = require('events');
var emitter = new events.EventEmitter();
// 注册事件监听器
emitter.on('event', function (name) {
    console.log('listener 1', 'name|' + name);
});
emitter.on('event', function (name) {
    console.log('listener 2', 'name|' + name);
});
// 事件发射
emitter.emit('event', 'sunmy');



/** fs **/

/* fs.readFile(filename, [encoding], [callback(err, data)]) */
var fs = require('fs');
fs.readFile('content', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});


/* fs.open(path, flags, [mode], [callback(err, fd)]) */
/* fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)]) */



/** http **/

/**
 * 1. 服务器对象 http.Server()
 *     request 事件: 服务器接收到客户端请求时触发    参数: res(http.ServerResponse) & req(http.ServerRequest)
 *     connection 事件: TCP 连接建立时触发    参数: socket
 *     close 事件: 服务器关闭时触发
 * 2. 客户端对象 http.request(options, callback)
 *     * 返回值 req(http.ClientRequest)
 *     * 回调参数 res(http.ClientResponse)
 *
 *     注: http.get(options, callback) [简化版] [无须 req.end()]
 *
 *
 *
 * http.ServerRequest (客户端 请求信息)
 *     请求头 (立即读取)
 *     请求体
 *         data 事件: 接收到请求数据时触发    参数: chunk
 *         end 事件: 数据传输结束时触发
 *         close 事件: 用户当前请求结束时触发
 *
 * http.ServerResponse (服务器 返回信息)
 *     .writeHead(statusCode, [headers])
 *     .write(data, [encoding])
 *     .end([data], [encoding]) 须结束响应 否则客户端一直处于等待状态
 *
 * http.ClientRequest (已产生的 进行中的 请求)
 *     .write(data, [encoding])
 *     .end([data], [encoding]) 须结束请求 否则服务器无法接收信息
 *     .abort() 终止正在发送的请求
 *     .setTimeout(timeout, [callback])
 *
 * http.ClientResponse
 *     data 事件: 数据到达时触发    参数: chunk
 *     end 事件: 数据传输结束时触发
 *     close 事件: 用户当前请求结束时触发
 */




