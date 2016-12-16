import echarts from 'echarts'

export default {
    container: document.getElementById('radar'),
    opts: {
        title: {
            text: ''
        },
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
        this.opts.title.text = data.title;
        this.opts.polar[0].indicator = data.indicator;
        this.opts.series[0].data = data.data;
        for (let i in data.data) {
            this.opts.legend.data.push(data.data[i].name);
        }
        echarts.init(this.container).setOption(this.opts);
    }
}
