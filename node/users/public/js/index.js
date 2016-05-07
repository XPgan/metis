/**
 * Created by sunmy on 16/5/6.
 */

var index = {
    do: function () {
        var _this = this;
        _this.login();
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
                    main.showResult(data, '/profile');
                },
                error: function () {
                    main.showDialog({message: '登录失败'});
                }
            });
        });
    }
};

index.do();