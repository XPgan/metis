/**
 * Created by sunmy on 16/7/25.
 */

var login = {
    do: function () {
        var _this = this;
        _this.login();
        _this.register();
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
                    main.showResult(data, function () {
                        location.href = '/chatroom';
                    });
                },
                error: function () {
                    main.showDialog({message: '登录失败'});
                }
            });
        });
    },
    register: function () {
        var $btn = $('.js_register');
        var $form = $('#form_register');
        $btn.on('click', function () {
            var user_name = $('#user_name').val();
            var password = $('#password').val();

            var judge = user_name && password;
            if (judge) {
                $.ajax({
                    url: "/register",
                    type: 'POST',
                    data: $form.serialize(),
                    success: function (data) {
                        main.showResult(data, function () {
                            location.href = '/';
                        });
                    },
                    error: function () {
                        main.showDialog({message: '注册失败'});
                    }
                });
            } else {
                main.showDialog({message: '用户名或密码不得为空'});
            }
        });
    }
};

login.do();