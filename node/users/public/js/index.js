/**
 * Created by sunmy on 16/5/6.
 */

var index = {
    do: function () {
        var _this = this;
        _this.login();
        _this.cardAction();
    },
    login: function () {
        var $btn = $('.js_login');
        var $form = $('#form_login');
        $btn.on('click', function () {
            $.ajax({
                url: '/login',
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    main.showResult(data, '/');
                },
                error: function () {
                    main.showDialog({message: '登录失败'});
                }
            });
        });
    },
    cardAction: function () {
        $('.js_switch').on('click', function () {
            $.ajax({
                url: "/exit",
                type: 'POST',
                success: function (data) {
                    main.showResult(data, '/login');
                },
                error: function () {
                    main.showDialog({message: '报错啦'});
                }
            });
        });
    }
};

index.do();