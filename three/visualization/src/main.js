import barchart from './modules/barchart'
import radarmap from './modules/radarmap'
import chinamap from './modules/chinamap'
import city from './data/city'
import university from './data/university'

var barchartOpts = {
    title: '中国大学世界排名',
    university: [],
    score: []
};
var radarmapOpts = {
    title: '学科排名分布',
    university: [],
    subject: [],
    data: []
};

// 默认显示所有高校
for (let key in city) {
    for (let i = 0;i < city[key].length;i++) {
        barchartOpts.university.push(city[key][i].university);
        barchartOpts.score.push(city[key][i].score);
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

    var target = university[params.name];
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

    var target = params.name;
    var lst = city[target];
    if (lst) {
        for (let i = 0;i < lst.length;i++) {
            barchartOpts.university.push(lst[i].university);
            barchartOpts.score.push(lst[i].score);
        }
        barchart.sketch(barchartOpts);
    } else {
        alert(target + '不含排名前20的高校');
    }
});
