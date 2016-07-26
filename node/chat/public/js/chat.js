/**
 * Created by sunmy on 16/7/26.
 */

var chat = {
    do: function () {
        socket.on('online', function (data) {
            var $lst = $('.js_news');
            var $li = $(document.createElement('li'));

            $li.text(data + '进入聊天室');
            $lst.append($li);
        });
    }
};

chat.do();