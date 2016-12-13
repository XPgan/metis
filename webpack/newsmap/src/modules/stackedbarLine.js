import echarts from 'echarts'
import data from '../data/stackedbarLine'

var container = document.getElementById('stackedbar-line');
var opts = {
    legend: {
        data: []
    },
    calculable: true,
    grid: {y: 70, y2: 30, x2: 20},
    xAxis: [
        {
            type: 'category',
            data: []
        },
        {
            type: 'category',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitArea: {show: false},
            splitLine: {show: false},
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {formatter: '{value}'}
        }
    ],
    series: []
}

opts.legend.data = data.legend;
opts.xAxis[0].data = data.xAxis;
opts.xAxis[1].data = data.xAxis;
opts.series = data.series;
echarts.init(container).setOption(opts);
