/**
 * Created by sunmy on 16/7/26.
 */

var chat = {

    news: $('.js_news'),
    message: $('.js_message'),

    do: function () {
        var _this = this;
        //_this.bulletNews();
        _this.sendMessage();

        socket.on('online', function (data) {
            var $item = $('#module_news').html()
                .replace('$userName', data.user_name);
            _this.news.append($item);
        });
        socket.on('message', function (data) {
            if (pageData.cur_user != data.user.id) {
                var $item = $('#module_message').html()
                    .replace('$view', 'other')
                    .replace('$userName', data.user.user_name)
                    .replace('$message', data.message);
                _this.message.append($item);
            }
        });
    },
    bulletNews: function () {
        var _this = this;
        var t = setInterval(function () {
            _this.news.find('li').first().slideUp(function () {
                $(this).remove();
            });
        }, 30000);
    },
    sendMessage: function () {
        var _this = this;
        var $btn = $('.js_send');
        $btn.on('click', function () {
            var value = $(this).prev().val();
            if (value) {
                socket.emit('message', {
                    cur_user: pageData.cur_user,
                    message: value
                });

                var $item = $('#module_message').html()
                    .replace('$view', 'self')
                    .replace('$userName', '我')
                    .replace('$message', value);
                _this.message.append($item);
            }
        });
    }
};

chat.do();