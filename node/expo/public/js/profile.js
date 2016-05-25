/**
 * Created by sunmy on 16/5/6.
 */

/** profile
 * 描述: [用户相关] [日记相关]
 * 模块: [profile.user] [profile.diary]
 */
var profile = {};

/** profile.user
 * 描述: [编辑用户信息] [注销] [退出登录] [关注用户]
 * 模块: [profile.user.reform] [profile.user.logout] [profile.user.exit]
 */
profile.user = {
    do: function () {
        var _this = this;
        _this.reform();
        _this.logout();
        _this.exit();
        _this.attention();
    },
    reform: function () {
        var _this = this;

        // 编辑面板
        var $board = $('.js_board');
        $('.js_edit').on('click', function () {
            $board.fadeIn('fast', function () {
                $board.find('div').slideDown('fast');
            });
        });
        $('.js_cancel').on('click', function () {
            $board.find('div').slideUp('fast', function () {
                $board.fadeOut('fast');
            });
        });
        // 修改头像
        $('.js_portrait').on('change', function () {
            _this.upldPortrait();
        });

        var $btn = $('.js_info');
        var $form = $('#form_info');
        $btn.on('click', function () {
            $.ajax({
                url: "/edit/info",
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
                main.showResult(data, function () {
                    location.reload();
                });
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

/** profile.diary
 * 描述: [收藏日记] [删除日记]
 * 模块: [profile.diary.favour] [profile.diary.remove]
 */
profile.diary = {
    do: function () {
        var _this = this;
        _this.favour();
        _this.remove();

        $('.js_more').on('click', function () {
            $(this).prev().toggleClass('ellipsis-row2');
        });
    },
    favour: function () {
        $('.js_fav').on('click', function () {
            var $child = $(this).find('em');
            var $num = $child.first();
            var $ico = $child.last();

            var count = $num.text() >> 0;
            var is_faved = $ico.hasClass('ico-faved');

            if (is_faved) {
                $num.text(count - 1);
                $ico.addClass('ico-fav').removeClass('ico-faved');
            } else {
                $num.text(count + 1);
                $ico.addClass('ico-faved').removeClass('ico-fav');
            }
        });
    },
    remove: function () {

    }
};

profile.user.do();
profile.diary.do();