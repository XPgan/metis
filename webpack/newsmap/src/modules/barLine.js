import echarts from 'echarts'

export default {
    container: document.getElementById('barLine'),
    opts: {
        legend: {
            data: []
        },
        calculable: true,
        dataZoom: {
            show: true,
            realtime: true,
            start: 40,
            end: 60
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: []
    },
    sketch (data) {
        this.opts.legend.data = data.legend;
        this.opts.xAxis[0].data = data.xAxis;
        this.opts.series = data.series;
        echarts.init(this.container).setOption(this.opts);
    }
}