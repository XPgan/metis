/**
 * Created by sunmy on 16/7/26.
 */

var edit = {
    user: {
        do: function () {
            var _this = this;
            _this.info();
        },
        info: function () {
            var $btn = $('.js_myinfo');
            var $form = $('#form_myinfo');
            $btn.on('click', function () {
                var judge = $('#user_name').val();
                if (judge) {
                    $.ajax({
                        url: "/edit/user/info",
                        type: 'POST',
                        data: $form.serialize(),
                        success: function (data) {
                            main.showResult(data, function () {
                                location.href = '/chatroom';
                            });
                        },
                        error: function () {
                            main.showDialog({message: '提交失败'});
                        }
                    });
                } else {
                    main.showDialog({message: '用户名不得为空'});
                }
            });
        }
    }
};

edit.user.do();