/**
 * Created by sunmy on 16/7/26.
 */

var edit = {
    user: {
        do: function () {
            var _this = this;
            _this.info();

            $('.js_password').on('click', function () {
                $(this).toggleClass('up');
                $(this).next().slideToggle();
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
                if ($('#user_name').val()) {
                    $.ajax({
                        url: "/edit/user/info",
                        type: 'POST',
                        data: $form.serialize(),
                        success: function (data) {
                            !JSON.parse(data).status && reset();

                            main.showResult(data, function () {
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
            });
        }
    }
};

edit.user.do();