/**
 * Created by sunmy on 16/4/29.
 */

var usersSystem = {
    do: function () {
        var _this = this;
        _this.logout();
    },
    logout: function () {
        $('.js_logout').on('click', function () {
            $.ajax({
                url: "/logout",
                type: 'GET',
                success: function () {
                    console.log('注销');
                }
            });

            console.log('点击');
        });
    }
};

usersSystem.do();