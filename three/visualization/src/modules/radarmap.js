import echarts from 'echarts'

export default {
    opts: {
        title: {
            x: 'right',
            text: '',
            subtext: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 'left',
            data: []
        },
        toolbox: {
            show: false
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
                name: '',
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
    sketch (opts) {
        var radarmap = echarts.init(document.getElementById('radarmap'));
        this.opts.title.text = opts.title;
        this.opts.title.subtext = opts.subTitle;
        this.opts.polar[0].indicator = opts.indicator;
        this.opts.series[0].data = opts.data;
        for (var i = 0;i < opts.data.length;i++) {
            this.opts.legend.data[i] = opts.data[i].name;
        }
        radarmap.setOption(this.opts);
    }
}
