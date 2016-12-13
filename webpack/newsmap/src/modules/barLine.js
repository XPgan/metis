import echarts from 'echarts'
import data from '../data/barLine'

var container = document.getElementById('bar-line');
var opts = {
    legend: {
        data: []
    },
    calculable: true,
    dataZoom: {
        show: true,
        realtime: true,
        start: 40,
        end: 60
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: []
};

opts.legend.data = data.legend;
opts.xAxis[0].data = data.xAxis;
opts.series = data.series;
echarts.init(container).setOption(opts);
