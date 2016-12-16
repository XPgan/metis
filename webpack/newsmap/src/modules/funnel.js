import echarts from 'echarts'

export default {
    container: document.getElementById('funnel'),
    opts: {
        title: {
            text: ''
        },
        legend: {
            orient: 'vertical',
            x: 'right',
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
        var series = this.opts.series;
        for (let i in data.data) {
            this.opts.legend.data.push(data.data[i].name);
        }
        for (let i = 0;i < series.length;i++) {
            series[i].data = data.data;
        }
        this.opts.title.text = data.title;
        echarts.init(this.container).setOption(this.opts);
    }
}