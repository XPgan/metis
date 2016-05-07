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
    },
    showResult: function (data, url, show_suc) {
        var _this = this;
        var status = JSON.parse(data).status;
        var message = JSON.parse(data).message;

        // 失败
        if (!status) {
            _this.showDialog({message: message});
        }

        // 成功
        if (status) {
            if (show_suc) {
                _this.showDialog({
                    message: message,
                    href: url,
                    btnClass: 'js_goto'
                });
            } else {
                location.href = url;
            }
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