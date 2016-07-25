/**
 * Created by sunmy on 16/7/14.
 */

var $body = $('body');

var main = {
    do: function () {
        var _this = this;
        _this.commonCtrl();
    },
    commonCtrl: function () {
        $body.on('click', '.js_close', function () {
            $(this).parents('.js_mask').hide();
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
        }
    },
    showDialog: function (opt) {
        var $dialog = $('#module_dialog').html()
            .replace('$message', opt.message)
            .replace('$btnClass', opt.btnClass || 'js_close');
        $body.append($dialog);
    }
};

main.do();