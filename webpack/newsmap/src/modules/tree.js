import echarts from 'echarts'

export default {
    container: document.getElementById('tree'),
    opts: {
        title: {
            text: ''
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 50,
                roam: false,
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                lineStyle: {
                    normal: {
                        opacity: 1,
                        width: 2,
                        curveness: 0.1
                    }
                },
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [],
                links: []
            }
        ]
    },
    sketch (data) {
        this.opts.title.text = data.title;
        this.opts.series[0].data = data.data;
        this.opts.series[0].links = data.links;
        echarts.init(this.container).setOption(this.opts);
    }
}