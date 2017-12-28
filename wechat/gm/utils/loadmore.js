import Request from 'request'

const Loadmore = {
    flag: true,
    page: 1,
    start_num: 0,

    loadData: (opts = {}) => {
        var callbackFn = opts.callbackFn || function () {};
        var completeFn = opts.completeFn || function () {};
        var nodataFn = opts.nodataFn || function () {};
        if (Loadmore.flag) {
            Request({
                url: opts.url,
                params: {
                    ...opts.params,
                    page: Loadmore.page,
                    start_num: Loadmore.start_num
                },
                successFn: (data) => {
                    callbackFn(data.data);
                    Loadmore.page++;
                    Loadmore.start_num += 10;
                },
                failFn: (data) => {
                    var isNull = (data.error == 1)
                        || (data.data == null)
                        || ((data.data instanceof Array) && !data.data.length)
                        || (JSON.stringify(data.data) == '{}')
                    if (isNull) {
                        Loadmore.flag = false;
                        if ((Loadmore.page == 1) || (Loadmore.start_num == 0)) {
                            nodataFn();
                        }
                        completeFn();
                    }
                }
            });
        }
    },
    clear: () => {
        Loadmore.flag = true;
        Loadmore.page = 1;
        Loadmore.start_num = 0;
    }
}

module.exports = Loadmore;
