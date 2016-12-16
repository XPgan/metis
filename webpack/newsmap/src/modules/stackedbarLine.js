import echarts from 'echarts'

export default {
    container: document.getElementById('stackedbarLine'),
    opts: {
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
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: []
    },
    sketch (data) {
        this.opts.legend.data = data.legend;
        for (let i = 0;i < 2;i++) {
            this.opts.xAxis[i].data = data.xAxis;
        }
        this.opts.series = data.series;
        echarts.init(this.container).setOption(this.opts);
    }
}