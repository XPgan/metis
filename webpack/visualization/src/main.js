import barchart from './modules/barchart'
import radarmap from './modules/radarmap'
import chinamap from './modules/chinamap'
import cityUniver from './data/city-univer'
import univerSubject from './data/univer-subject'

var barchartOpts = {
    title: '中国高校评分',
    university: [],
    score: []
};
var radarmapOpts = {
    title: '高校学科评分',
    university: [],
    subject: [],
    data: []
};

// 默认显示所有高校
for (let key in cityUniver) {
    let _loop = cityUniver[key];
    for (let i = 0;i < _loop.length;i++) {
        barchartOpts.university.push(_loop[i].university);
        barchartOpts.score.push(_loop[i].score);
    }
}

barchart.sketch(barchartOpts);
radarmap.sketch(radarmapOpts);
chinamap.sketch();

// 事件
barchart.barchart.on('click', function (params) {
    radarmapOpts.university = [];
    radarmapOpts.subject = [];
    radarmapOpts.data = [];

    var target = univerSubject[params.name];
    for (let i = 0;i < target.subject.length;i++) {
        radarmapOpts.subject.push({
            name: target.subject[i],
            max: 100
        });
    }
    radarmapOpts.data.push({
        name: params.name,
        value: target.score
    });
    radarmapOpts.university[0] = params.name;
    radarmap.sketch(radarmapOpts);
});
chinamap.chinamap.on('click', function (params) {
    barchartOpts.university = [];
    barchartOpts.score = [];

    var target = cityUniver[params.name];
    if (target) {
        for (let i = 0;i < target.length;i++) {
            barchartOpts.university.push(target[i].university);
            barchartOpts.score.push(target[i].score);
        }
        barchart.sketch(barchartOpts);
    } else {
        alert('暂未记录' + params.name + '的高校信息');
    }
});
