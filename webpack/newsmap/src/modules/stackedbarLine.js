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
        this.opts.xAxis[0].data = data.xAxis;
        this.opts.xAxis[1].data = data.xAxis;
        for (let i in data.data.bar) {
            var obj = {};
            var loop = data.data.bar[i];
            loop.itemStyle.normal.label = {show: true};
            obj.type = 'bar';
            obj.name = loop.name;
            obj.data = loop.value;
            obj.itemStyle = loop.itemStyle;
            this.opts.legend.data.push(obj.name);
            this.opts.series.push(obj);
        }
        data.data.line.type = 'line';
        this.opts.series.push(data.data.line);
        echarts.init(this.container).setOption(this.opts);
    }
}
