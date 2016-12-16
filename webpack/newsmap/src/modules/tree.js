import echarts from 'echarts'

export default {
    container: document.getElementById('tree'),
    opts: {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'sankey',
            layout: 'none',
            data: [],
            links: [],
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: 'transparent'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.5
                }
            }
        }]
    },
    sketch (data) {
        this.opts.series[0].data = data.data;
        this.opts.series[0].links = data.links;
        echarts.init(this.container).setOption(this.opts);
    }
}