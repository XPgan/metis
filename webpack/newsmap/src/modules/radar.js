import echarts from 'echarts'

export default {
    container: document.getElementById('radar'),
    opts: {
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
    },
    sketch (data) {
        this.opts.legend.data = data.legend;
        this.opts.polar[0].indicator = data.indicator;
        this.opts.series[0].data = data.data;
        echarts.init(this.container).setOption(this.opts);
    }
}
