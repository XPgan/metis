import echarts from 'echarts'

export default {
    container: document.getElementById('funnel'),
    opts: {
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
    },
    sketch (data) {
        this.opts.legend.data = data.legend;
        for (let i = 0;i < 4;i++) {
            this.opts.series[i].data = data.data;
        }
        echarts.init(this.container).setOption(this.opts);
    }
}