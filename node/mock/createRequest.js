var method = require('./method');

module.exports = {

    router: null,
    getRequestCache: {},

    createGetRequest: function (requestObj) {
        this.router.get(requestObj.url, function (req, res) {
            // var paramTmp = '';
            // for (var key in req.query) {
            //     paramTmp += '&' + key + '=' + req.query[key];
            // }
            // var paramStr = '?' + paramTmp.slice(1);
            // var requestUrl = requestObj.url + paramStr;

            var responseData = {};
            if (requestObj.data instanceof Function) {
                responseData = requestObj.data() || {};
            } else {
                responseData = (requestObj.data !== undefined) ? requestObj.data : {};
            }
            // if (this.getRequestCache[requestUrl]) {
            //     responseData = this.getRequestCache[requestUrl];
            // } else {
            //     this.getRequestCache[requestUrl] = responseData;
            // }

            // var start_num = req.query.start_num >> 0;
            // var count = req.query.count >> 0 || 10;
            // var page = req.query.page >> 0;
            // (req.query.start_num !== undefined) && (responseData.data = responseData.data.slice(start_num, start_num + count));
            // (req.query.page !== undefined) && (responseData.data = responseData.data.slice((page - 1) * count, (page - 1) * count + count));
            // if (responseData.data.length == 0) {
            //     responseData.error = 1;
            //     responseData.message = 'no more';
            // }
            res.end(JSON.stringify(responseData));
        });
    },
    createPostRequest: function (requestObj) {
        this.router.post(requestObj.url, function (req, res) {
            var responseData = method.faultTolerant(requestObj.data);
            res.end(JSON.stringify(responseData));
        });
    },
    do: function (router, requestGatherLst) {
        this.router = router;
        for (var requestGatherLstI in requestGatherLst) {
            var requestGather = requestGatherLst[requestGatherLstI];
            for (var requestGatherI in requestGather) {
                var requestObj = requestGather[requestGatherI];
                var requestObjType = requestObj.type;
                switch (requestObjType) {
                    case 'GET':
                        this.createGetRequest(requestObj);
                        break;
                    case 'POST':
                        this.createPostRequest(requestObj);
                        break;
                    default:
                        this.createGetRequest(requestObj);
                        break;
                }
            }
        }
    }
}