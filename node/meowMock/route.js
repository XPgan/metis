var express = require('express');
var router = express.Router();
var createRequest = require('./createRequest');

var example = require('./data/example');
var requestGatherLst = [
    example
];

createRequest.do(router, requestGatherLst);
module.exports = router;
