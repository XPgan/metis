/**
 * Created by sunmy on 16/4/29.
 */

var $body = $('body');
var dialogModule = $('#module_dialog').html();

var main = {
    do: function () {
        var _this = this;
        _this.commonCtrl();
        _this.login();
        _this.logout();
        _this.register();
        _this.upldPortrait();
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
            _this.showDialog({
                message: message,
                href: null,
                btnClass: 'js_close',
                btnTxt: '关闭'
            });
        }

        // 成功
        if (status) {
            if (show_suc) {
                _this.showDialog({
                    message: message,
                    href: url,
                    btnClass: 'js_goto',
                    btnTxt: '确定'
                });
            } else {
                location.href = url;
            }
        }
    },
    showDialog: function (opt) {
        var $dialog = dialogModule
            .replace('$message', opt.message)
            .replace('$href', opt.href)
            .replace('$btnClass', opt.btnClass)
            .replace('$btnTxt', opt.btnTxt);
        $body.append($dialog);
    },
    login: function () {
        var _this = this;
        $body.on('click', '.js_login', function () {
            $.ajax({
                url: '/login',
                type: 'POST',
                data: $('#form_login').serialize(),
                success: function (data) {
                    _this.showResult(data, '/profile');
                }
            });
        });
    },
    logout: function () {
        var _this = this;
        $body.on('click', '.js_logout', function () {
            $.ajax({
                url: "/logout",
                type: 'POST',
                success: function (data) {
                    _this.showResult(data, '/login', 1);
                }
            });
        });
    },
    register: function () {
        var _this = this;
        $body.on('click', '.js_register', function () {
            $.ajax({
                url: "/register",
                type: 'POST',
                data: $('#form_register').serialize(),
                success: function (data) {
                    _this.showResult(data, '/login');
                }
            });
        });
    },
    upldPortrait: function () {
        var _this = this;
        $body.on('click', '.js_portrait', function () {
            var formData = new FormData($('#form_portrait')[0]);
            $.ajax({
                url: "/upload/portrait",
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    _this.showResult(data, null, 1);
                }
            });
        });
    }
};

main.do();