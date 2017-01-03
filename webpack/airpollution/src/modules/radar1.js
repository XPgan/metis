import echarts from 'echarts'

export default {
    container: document.getElementById('radar1'),
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
        for (let city in data.data) {
            var index = 0;
            var vals = [];
            for (let key in data.data[city]) {
                (index < 6) && vals.push(data.data[city][key]);
                index++;
            }
            this.opts.legend.data.push(city);
            this.opts.series[0].data.push({
                value: vals,
                name: city
            });
        }
        this.opts.polar[0].indicator = data.indicator1;
        echarts.init(this.container).setOption(this.opts);
    }
}
