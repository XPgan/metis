/**
 * Created by sunmy on 16/7/26.
 */

var chat = {

    news: $('.js_news'),
    message: $('.js_message'),

    do: function () {
        var _this = this;
        _this.handleEvents();
        _this.bulletNews();
        _this.sendMessage();
    },
    handleEvents: function () {
        var _this = this;

        socket.on('online', function (data) {
            var $item = $('#module_news').html()
                .replace('$username', data.user_name);
            _this.news.append($item);
        });
        socket.on('message', function (data) {
            if (pageData.cur_user != data.user.id) {
                var $item = $('#module_message').html()
                    .replace('$view', 'other')
                    .replace('$username', data.user.user_name)
                    .replace('$message', data.message);
                _this.message.append($item);
            }
        });
        socket.on('failed', function () {
            _this.message.find('li').last().addClass('failed');
            main.showTips('消息发送失败 点击消息重新发送');
        });
    },
    bulletNews: function () {
        var _this = this;
        var t = setInterval(function () {
            _this.news.find('li').first().slideUp(function () {
                $(this).remove();
            });
        }, 5000);
    },
    sendMessage: function () {
        var _this = this;
        var $btn = $('.js_send');
        var $input = $('.js_input');
        var method = function () {
            var value = $input.val();
            if (value) {
                socket.emit('message', {
                    user_id: pageData.cur_user,
                    message: value
                });
                $input.val('');

                var $item = $('#module_message').html()
                    .replace('$view', 'self')
                    .replace('$username', '我')
                    .replace('$message', value);
                _this.message.append($item);
            }
        };

        $btn.on('click', function () {
            method();
        });
        $input.on('keydown', function (e) {
            (e.keyCode == '13') && method();
        });
    }
};

chat.do();