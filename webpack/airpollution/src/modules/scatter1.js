import echarts from 'echarts'

export default {
    container: document.getElementById('scatter1'),
    opts: {
        tooltip: {
            show: true,
            formatter: '{c}'
        },
        backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80f1be', '#3adbd2'
        ],
        legend: {
            y: 'top',
            data: [],
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
        },
        xAxis: {
            type: 'value',
            name: '人口数（万人）',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'GDP（亿元）',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension: 2,
                min: 0,
                max: 500,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：污染物指数（μg/m3）'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255, 255, 255, .2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        series: []
    },
    sketch (data) {
        this.opts.series = [];
        for (let city in data.data) {
            var vals = [];
            var pollutant = data.pollutant || 'pm2.5';
            vals.push(data.data[city]['population']);
            vals.push(data.data[city]['gdp']);
            vals.push(data.data[city][pollutant]);

            this.opts.legend.data.push(city);
            this.opts.series.push({
                name: city,
                type: 'scatter',
                itemStyle: {
                    normal: {
                        opacity: 0.8,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [
                    vals
                ]
            });
        }
        echarts.init(this.container).setOption(this.opts);
    }
}
