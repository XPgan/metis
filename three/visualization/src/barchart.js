import echarts from 'echarts'

export default {
    opts: {
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
                data: []
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
                data: []
            }
        ]
    },
    sketch (opts) {
        var barchart = echarts.init(document.getElementById('barchart'));
        this.opts.title.text = opts.title;
        this.opts.title.subtext = opts.subTitle;
        this.opts.xAxis[0].data = opts.keys;
        this.opts.series[0].data = opts.values;
        barchart.setOption(this.opts);
    }
}
