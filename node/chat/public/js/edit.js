/**
 * Created by sunmy on 16/7/26.
 */

var edit = {
    user: {
        do: function () {
            var _this = this;
            _this.info();
            _this.user_name = $('#user_name').val();

            $('.js_password').on('click', function () {
                $(this).toggleClass('up');
                $(this).next().slideToggle();
            });
            $('.js_enter').on('click', function () {
                socket.emit('online', {
                    user_id: pageData.cur_user,
                    user_name: _this.user_name
                });
            });
        },
        info: function () {
            var $btn = $('.js_myinfo');
            var $form = $('#form_myinfo');
            $btn.on('click', function () {
                var $newPassword = $('#password_new');
                var $oldPassword = $('#password_old');
                var reset = function () {
                    $oldPassword.attr('name', '');
                    $newPassword.attr('name', '');
                };

                if ($oldPassword.val() && $newPassword.val()) {
                    $oldPassword.attr('name', 'password_old');
                    $newPassword.attr('name', 'password');
                }
                if (Boolean($oldPassword.val()) ^ Boolean($newPassword.val())) {
                    reset();

                    main.showDialog({message: '原密码 & 新密码 均不能为空'});
                } else {
                    var user_name = $('#user_name').val();
                    if (user_name) {
                        $.ajax({
                            url: "/edit/user/info",
                            type: 'POST',
                            data: $form.serialize(),
                            success: function (data) {
                                !JSON.parse(data).status && reset();

                                main.showResult(data, function () {
                                    socket.emit('online', {
                                        user_id: pageData.cur_user,
                                        user_name: user_name
                                    });
                                    location.href = '/chatroom';
                                });
                            },
                            error: function () {
                                reset();

                                main.showDialog({message: '提交失败'});
                            }
                        });
                    } else {
                        reset();

                        main.showDialog({message: '用户名不得为空'});
                    }
                }
            });
        }
    }
};

edit.user.do();