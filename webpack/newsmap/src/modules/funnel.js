import echarts from 'echarts'
import data from '../data/funnel'

var container = document.getElementById('funnel');
var opts = {
    legend: {
        orient: 'vertical',
        x: 'left',
        data: []
    },
    calculable: true,
    series: [
        {
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            x: '5%',
            y: '50%',
            data: []
        },
        {
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            x: '5%',
            y: '5%',
            sort: 'ascending',
            data: []
        },
        {
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            x: '55%',
            y: '5%',
            itemStyle: {
                normal: {
                    label: {
                        position: 'left'
                    }
                }
            },
            data: []
        },
        {
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            x: '55%',
            y: '50%',
            sort: 'ascending',
            itemStyle: {
                normal: {
                    label: {
                        position: 'left'
                    }
                }
            },
            data: []
        }
    ]
}

opts.legend.data = data.legend;
opts.series[0].data = data.data;
opts.series[1].data = data.data;
opts.series[2].data = data.data;
opts.series[3].data = data.data;
echarts.init(container).setOption(opts);
