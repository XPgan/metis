var express = require('express');
var router = express.Router();

// 通用列表
var serviceLst = require('./data/serviceLst');

// POST 请求
var postRequests = require('./data/postRequests');

var requestGatherLst = [
    serviceLst,
    postRequests
];

var getRequestCache = {};
var createGetRequest = function (requestObj) {
    router.get(requestObj.url, function (req, res) {
        var paramTmp = '';
        for (var key in req.query) {
            paramTmp += '&' + key + '=' + req.query[key];
        }
        var paramStr = '?' + paramTmp.slice(1);
        var requestUrl = requestObj.url + paramStr;

        var responseData = requestObj.data();
        if (getRequestCache[requestUrl]) {
            responseData = getRequestCache[requestUrl];
        } else {
            getRequestCache[requestUrl] = responseData;
        }

        var start_num = req.query.start_num >> 0;
        var count = req.query.count >> 0 || 10;
        var page = req.query.page >> 0;
        (req.query.start_num != undefined) && (responseData.data = responseData.data.slice(start_num, start_num + count));
        (req.query.page != undefined) && (responseData.data = responseData.data.slice((page - 1) * count, (page - 1) * count + count));
        if (responseData.data.length == 0) {
            responseData.error = 1;
            responseData.message = 'no more';
        }
        res.end(JSON.stringify(responseData));
    });
};
var createPostRequest = function (requestObj) {
    router.post(requestObj.url, function (req, res) {
        var responseData = requestObj.data();
        res.end(JSON.stringify(responseData));
    });
};

for (var requestGatherLstI in requestGatherLst) {
    var requestGather = requestGatherLst[requestGatherLstI];
    for (var requestGatherI in requestGather) {
        var requestObj = requestGather[requestGatherI];
        var requestObjType = requestObj.type;
        switch (requestObjType) {
            case 'GET':
                createGetRequest(requestObj);
                break;
            case 'POST':
                createPostRequest(requestObj);
                break;
        }
    }
}

module.exports = router;
