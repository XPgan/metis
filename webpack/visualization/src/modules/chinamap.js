import echarts from 'echarts'
import '../libs/china'

export default {
    chinamap: echarts.init(document.getElementById('chinamap')),
    opts: {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode: 'single',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                }
            }
        ]
    },
    sketch () {
        this.chinamap.setOption(this.opts);
    }
}
