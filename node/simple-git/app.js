var express = require('express');
var app = express();
var git = require('simple-git');

// clone
git()
    .clone('git@github.com:sunmengyuan/aphrodite.git');

// pull
git('./aphrodite')
    .pull('origin', 'master', function (err, update) {
        console.log(update);
    });

// push
git('./aphrodite')
    .add('.')
    .commit('message')
    .pull('origin', 'master')
    .push('origin', 'master');

module.exports = app;