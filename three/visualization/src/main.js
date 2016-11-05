import barchart from './modules/barchart'
import radarmap from './modules/radarmap'
import chinamap from './modules/chinamap'
import barchartData from './data/barchart'
import radarmapData from './data/radarmap'

// 执行
barchart.sketch(barchartData.opts);
radarmap.sketch(radarmapData.opts);
chinamap.sketch({});

// 事件
barchart.barchart.on('click', function (params) {
    var index = params.dataIndex;
    var data = radarmapData.data[index];
    var indicator = radarmapData.indicator[index];
    radarmapData.opts.indicator = indicator;
    radarmapData.opts.data[0] = data;
    radarmap.sketch(radarmapData.opts);
});
