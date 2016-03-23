/**
 * Created by sunmy on 16/3/21.
 */

// 预定义模块
var http = require("http");
var url = require("url");

// 自定义模块
var requestHandlers = require("./requestHandlers");

// 主函数
var main = {

    handle: {},

    do: function () {
        var _this = this;
        _this.handlers();
        _this.server();
    },
    handlers: function () {
        var _this = this;
        _this.handle["/"] = requestHandlers.start;
        _this.handle["/start"] = requestHandlers.start;
        _this.handle["/upload"] = requestHandlers.upload;
    },
    route: function (pathname, response) {
        var _this = this;
        var target = _this.handle[pathname];

        if (typeof target === 'function') {
            target(response);
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("404 Not found");
            response.end();
        }
    },
    server: function () {
        var _this = this;
        http.createServer(function (request, response) {
            var pathname = url.parse(request.url).pathname;
            _this.route(pathname, response);
        }).listen(8888);
    }
};

main.do();