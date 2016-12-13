import echarts from 'echarts'
import data from '../data/radar'

var container = document.getElementById('radar');
var opts = {
    legend: {
        x: 'center',
        data: []
    },
    calculable: true,
    polar: [
        {
            indicator: [],
            radius: 130
        }
    ],
    series: [
        {
            type: 'radar',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: []
        }
    ]
}

opts.legend.data = data.legend;
opts.polar[0].indicator = data.indicator;
opts.series[0].data = data.data;
echarts.init(container).setOption(opts);
