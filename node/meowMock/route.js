var express = require('express');
var router = express.Router();
var createRequest = require('./createRequest');

var example = require('./data/example');
var ascle = require('./data/ascle');
var calypso = require('./data/calypso');
var requestGatherLst = [
    example,
    ascle,
    calypso
];

createRequest.do(router, requestGatherLst);
module.exports = router;
