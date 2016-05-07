/**
 * Created by sunmy on 16/5/6.
 */

var profile = {
    do: function () {
        var _this = this;
        _this.upldPortrait();
        _this.logout();
        _this.change();
    },
    upldPortrait: function () {
        var $form = $('#form_portrait');
        var $file = $('#portrait');
        $file.on('change', function () {
            var formData = new FormData($form[0]);
            $.ajax({
                url: "/upload/portrait",
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
    change: function () {
        var $change = $('.js_change');
        var $edit = $('.js_edit');
        var $submit = $('.js_info');
        var $form = $('#form_info');

        $change.on('click', function () {
            $edit.show();
        });
        $submit.on('click', function () {
            $.ajax({
                url: "/change/info",
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
    }
};

profile.do();