/**
 * Created by sunmy on 16/5/6.
 */

var register = {
    do: function () {
        var $btn = $('.js_register');
        var $form = $('#form_register');
        $btn.on('click', function () {
            var user_name = $('#user_name').val();
            var password = $('#user_password').val();
            var sex = $('#user_sex').val();
            var tel = $('#user_tel').val();
            var qq = $('#user_qq').val();

            var judge = user_name && password && sex && tel && qq;
            if (judge) {
                $.ajax({
                    url: "/register",
                    type: 'POST',
                    data: $form.serialize(),
                    success: function (data) {
                        main.showResult(data, function () {
                            main.showDialog({
                                message: '注册成功',
                                href: '/profile/' + JSON.parse(data).user_id,
                                btnClass: 'js_goto'
                            });
                        });
                    },
                    error: function () {
                        main.showDialog({message: '注册失败'});
                    }
                });
            } else {
                main.showDialog({message: '含空必填项~'});
            }
        });
    }
};

register.do();