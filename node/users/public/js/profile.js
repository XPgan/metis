/**
 * Created by sunmy on 16/5/6.
 */

var profile = {
    do: function () {
        var _this = this;
        _this.edit();
        _this.logout();
        _this.exit();
    },
    edit: function () {
        var _this = this;

        // 编辑面板
        var $board = $('.js_board');
        $('.js_edit').on('click', function () {
            $board.slideDown();
        });
        $('.js_cancel').on('click', function () {
            $board.slideUp();
        });
        // 修改头像
        $('.js_portrait').on('change', function () {
            _this.upldPortrait();
        });

        var $btn = $('.js_info');
        var $form = $('#form_info');
        $btn.on('click', function () {
            $.ajax({
                url: "/edit",
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    main.showResult(data, '/profile');
                },
                error: function () {
                    main.showDialog({message: '提交失败'});
                }
            });
        });
    },
    upldPortrait: function () {
        var $form = $('#form_portrait');
        var formData = new FormData($form[0]);
        $.ajax({
            url: "/edit/portrait",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                main.showResult(data, '/profile');
            },
            error: function () {
                main.showDialog({message: '上传失败'});
            }
        });
    },
    logout: function () {
        var $btn = $('.js_logout');
        $btn.on('click', function () {
            $.ajax({
                url: "/logout",
                type: 'POST',
                success: function (data) {
                    main.showResult(data, '/login', 1);
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
                    main.showResult(data, '/login');
                },
                error: function () {
                    main.showDialog({message: '无法退出登录'});
                }
            });
        });
    }
};

profile.do();