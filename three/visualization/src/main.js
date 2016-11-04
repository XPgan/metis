import echarts from 'echarts'

var barchart = echarts.init(document.getElementById('barchart'));
barchart.setOption({
    title: {
        x: 'center',
        text: '',
        subtext: '',
        link: ''
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: false, readOnly: false},
            restore: {show: false},
            saveAsImage: {show: false}
        }
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = [
                            '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                            '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n\n{c}\n'
                    }
                }
            },
            data: [15, 21, 10, 4, 12, 5, 6, 5, 25, 23, 7]
        }
    ]
});
