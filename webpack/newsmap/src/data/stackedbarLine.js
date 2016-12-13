export default {
    legend: [
        '1', '2', '3',
        '4', '5', '6'
    ],
    xAxis: ['Line', 'Bar', 'Scatter', 'K', 'Map'],
    series: [
        {
            name: '1',
            type: 'bar',
            itemStyle: {normal: {color: 'rgba(193,35,43,1)', label: {show: true}}},
            data: [40, 155, 95, 75, 0]
        },
        {
            name: '2',
            type: 'bar',
            itemStyle: {normal: {color: 'rgba(181,195,52,1)', label: {show: true, textStyle: {color: '#27727B'}}}},
            data: [100, 200, 105, 100, 156]
        },
        {
            name: '3',
            type: 'bar',
            itemStyle: {normal: {color: 'rgba(252,206,16,1)', label: {show: true, textStyle: {color: '#E87C25'}}}},
            data: [906, 911, 908, 778, 0]
        },
        {
            name: '4',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {normal: {color: 'rgba(193,35,43,0.5)', label: {show: true}}},
            data: [96, 224, 164, 124, 0]
        },
        {
            name: '5',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {normal: {color: 'rgba(181,195,52,0.5)', label: {show: true}}},
            data: [491, 2035, 389, 955, 347]
        },
        {
            name: '6',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {normal: {color: 'rgba(252,206,16,0.5)', label: {show: true}}},
            data: [2000, 2000, 2817, 2000, 0]
        },
        {
            name: '折线图',
            type: 'line',
            data: [100, 200, 800, 770, 600]
        }
    ]
}
