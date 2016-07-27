/**
 * Created by sunmy on 16/7/26.
 */

var chat = {

    news: $('.js_news'),

    do: function () {
        var _this = this;
        //_this.bulletNews();

        socket.on('online', function (data) {
            var $item = $('#module_news').html()
                .replace('$userName', data.user_name);
            _this.news.append($item);
        });
    },
    bulletNews: function () {
        var _this = this;
        var t = setInterval(function () {
            _this.news.find('li').first().slideUp(function () {
                $(this).remove();
            });
        }, 30000);
    }
};

chat.do();