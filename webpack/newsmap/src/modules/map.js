import echarts from 'echarts'
import '../maps/china'

var container = document.getElementById('heat');
var opts = {
    backgroundColor: '#1b1b1b',
    series: [
        {
            type: 'map',
            mapType: 'china',
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100, 149, 237, 0.6)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            }
        }
    ]
};
echarts.init(container).setOption(opts);
