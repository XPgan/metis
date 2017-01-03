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
        for (let key in data.data) {
            var obj = {};
            var loop = data.data[key];
            obj.type = key;
            obj.name = loop.name;
            obj.data = loop.value;
            this.opts.legend.data.push(obj.name);
            this.opts.series.push(obj);
        }
        echarts.init(this.container).setOption(this.opts);
    }
}
