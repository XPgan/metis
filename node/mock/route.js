var express = require('express');
var router = express.Router();

// 通用列表
var serviceLst = require('./data/serviceLst');

var requestGatherLst = [
    serviceLst
];

var getRequestCache = {};
var createGetRequest = function (requestObj) {
    router.get(requestObj.url, function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(JSON.stringify(requestObj.data()));
    });
};
var createPostRequest = function (requestObj) {
    console.log(requestObj);
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
