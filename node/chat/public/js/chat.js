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
        _this.resendMessage();
    },
    handleEvents: function () {
        var _this = this;

        socket.on('online', function (data) {
            var $item = $('#module_news').html()
                .replace('$username', data.user_name)
                .replace('$message', '进入聊天室');
            _this.news.append($item);
        });
        socket.on('offline', function (data) {
            var $item = $('#module_news').html()
                .replace('$username', data.user_name)
                .replace('$message', '离开聊天室');
            _this.news.append($item);
        });
        socket.on('message', function (data) {
            $('.js_active').removeClass('failed').find('p').removeClass('js_resend');

            if (pageData.cur_user != data.user.id) {
                var $item = $('#module_message').html()
                    .replace('$view', 'other')
                    .replace('$username', data.user.user_name)
                    .replace('$message', data.message);
                _this.message.append($item);
            }
        });
        socket.on('failed', function () {
            var judge = $('.js_active').length;
            if (!judge) {
                _this.message.find('li').last().addClass('failed')
                             .find('p').addClass('js_resend');
            }
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
                $('.js_active').removeClass('js_active');

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
    },
    resendMessage: function () {
        $body.on('click', '.js_resend', function () {
            var _self = $(this);
            var value = _self.text();

            _self.parents('li').addClass('js_active').siblings().removeClass('js_active');
            socket.emit('message', {
                user_id: pageData.cur_user,
                message: value
            });
        });
    }
};

chat.do();