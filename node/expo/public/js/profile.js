/**
 * Created by sunmy on 16/5/6.
 */

var profile = {};

profile.user = {
    do: function () {
        var _this = this;
        _this.edit.info();
        _this.edit.portrait();
        _this.logout();
        _this.exit();
        _this.attention();
    },
    edit: {
        info: function () {
            var $btn = $('.js_userinfo');
            var $form = $('#form_userinfo');
            $btn.on('click', function () {
                $.ajax({
                    url: "/user/edit/info",
                    type: 'POST',
                    data: $form.serialize(),
                    success: function (data) {
                        main.showResult(data, function () {
                            location.reload();
                        });
                    },
                    error: function () {
                        main.showDialog({message: '提交失败'});
                    }
                });
            });
        },
        portrait: function () {
            var $btn = $('.js_portrait');
            var $form = $('#form_portrait');
            $btn.on('change', function () {
                var formData = new FormData($form[0]);
                $.ajax({
                    url: "/user/edit/portrait",
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        main.showResult(data, function () {
                            location.reload();
                        });
                    },
                    error: function () {
                        main.showDialog({message: '上传失败'});
                    }
                });
            });
        }
    },
    logout: function () {
        var $btn = $('.js_logout');
        $btn.on('click', function () {
            $.ajax({
                url: "/logout",
                type: 'POST',
                success: function (data) {
                    main.showResult(data, function (message) {
                        main.showDialog({
                            message: message,
                            href: '/',
                            btnClass: 'js_goto'
                        });
                    });
                },
                error: function () {
                    main.showDialog({message: '注销失败'});
                }
            });
        });
    },
    exit: function () {
        var $btn = $('.js_exit');
        $btn.on('click', function () {
            $.ajax({
                url: "/exit",
                type: 'POST',
                success: function (data) {
                    main.showResult(data, function () {
                        location.href = '/';
                    });
                },
                error: function () {
                    main.showDialog({message: '无法退出登录'});
                }
            });
        });
    },
    attention: function () {

    }
};

profile.diary = {
    do: function () {
        var _this = this;
        _this.edit();
        _this.remove();
        _this.favour();
    },
    edit: function () {

    },
    remove: function () {

    },
    favour: function () {

    }
};

profile.user.do();
profile.diary.do();