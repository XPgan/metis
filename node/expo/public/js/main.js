/**
 * Created by sunmy on 16/4/29.
 */

var $body = $('body');

var main = {
    do: function () {
        var _this = this;
        _this.commonCtrl();
    },
    commonCtrl: function () {
        $body.on('click', '.js_close', function (e) {
            e.preventDefault();
            $(this).parents('.js_mask').hide();
        });
        $body.on('click', '.js_goto', function (e) {
            e.preventDefault();
            location.href = e.target.href;
        });
        $body.on('click', '.js_back', function () {
            history.back();
        });
    },
    showResult: function (data, callback) {
        var _this = this;
        var status = JSON.parse(data).status;
        var message = JSON.parse(data).message;

        switch (status) {
            case 0: // 操作失败
                _this.showDialog({message: message});
                break;
            case 1: // 操作成功
                callback(message);
                break;
            case 1001: // 未登录
                _this.showDialog({
                    message: message,
                    href: '/',
                    btnClass: 'js_goto'
                });
                break;
        }
    },
    showDialog: function (opt) {
        var $dialog = $('#module_dialog').html()
            .replace('$message', opt.message)
            .replace('$href', opt.href || null)
            .replace('$btnClass', opt.btnClass || 'js_close');
        $body.append($dialog);
    }
};

main.do();