/**
 * Created by sunmy on 16/7/25.
 */

var log = {
    do: function () {
        var _this = this;
        _this.login();
        _this.register();

        $('.js_overturn').on('click', function () {
            var _self = $(this);
            var $current = _self.parents('.js_area');

            $current.addClass('overturn');
            $current[0].addEventListener('webkitAnimationEnd', function () {
                $(this).hide().removeClass('overturn').siblings().show();
            }, false);
        });
    },
    login: function () {
        var $btn = $('.js_login');
        var $form = $('#form_login');
        var firstime = main.getUrlParam('firstime') >> 0;

        $btn.on('click', function () {
            $.ajax({
                url: '/login',
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    socket.emit('online');
                    main.showResult(data, function () {
                        location.href = firstime ? '/edit/myinfo' : '/chatroom';
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
                            // 首次登录
                            location.href = '/login?firstime=1';
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

log.do();