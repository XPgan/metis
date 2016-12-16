import echarts from 'echarts'

export default {
    container: document.getElementById('barLine'),
    opts: {
        title: {
            text: ''
        },
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
        this.opts.title.text = data.title;
        for (var key in data.data) {
            var obj = {};
            obj.type = key;
            obj.name = data.data[key].name;
            obj.data = data.data[key].value;
            this.opts.legend.data.push(obj.name);
            this.opts.series.push(obj);
        }
        echarts.init(this.container).setOption(this.opts);
    }
}