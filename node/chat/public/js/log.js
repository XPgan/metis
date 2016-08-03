/**
 * Created by sunmy on 16/7/25.
 */

var log = {

    do: function () {
        var _this = this;
        _this.login();
        _this.register();
        _this.exit();

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
        $btn.on('click', function () {
            $.ajax({
                url: '/login',
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    var user_name = $form.find('input[name="user_name"]').val();
                    main.showResult(data, function () {
                        socket.emit('online', {
                            user_id: JSON.parse(data).user_id,
                            user_name: user_name
                        });
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
                            location.href = '/edit/myinfo';
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
    },
    exit: function () {
        var $btn = $('.js_exit');
        $btn.on('click', function () {
            var cur_user = pageData.cur_user;
            $.ajax({
                url: "/exit",
                type: 'POST',
                data: {
                    user_id: cur_user
                },
                success: function (data) {
                    main.showResult(data, function () {
                        socket.emit('offline', {
                            user_id: cur_user,
                            user_name: JSON.parse(data).user_name
                        });

                        location.href = '/';
                    });
                },
                error: function () {
                    main.showDialog({message: '无法退出登录'});
                }
            });
        });
    }
};

log.do();