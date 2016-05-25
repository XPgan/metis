/**
 * Created by sunmy on 16/4/29.
 */

var $body = $('body');
var dialogModule = $('#module_dialog').html();

var main = {
    do: function () {
        var _this = this;
        _this.commonCtrl();
    },
    commonCtrl: function () {
        $body.on('click', '.js_close', function (e) {
            e.preventDefault();
            $(this).parents('.js_dialog').hide();
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

        if (status) {
            callback(message);
        } else {
            _this.showDialog({message: message});
        }
    },
    showDialog: function (opt) {
        var $dialog = dialogModule
            .replace('$message', opt.message)
            .replace('$href', opt.href || null)
            .replace('$btnClass', opt.btnClass || 'js_close');
        $body.append($dialog);
    }
};

main.do();